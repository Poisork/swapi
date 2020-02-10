/* eslint-disable no-console */
import {useState, useEffect} from 'react'
import CancelToken, {handlerEventIsCancel} from '../services/api/cancelToken'
import SWAPI from '../services/api/SWAPI'

export const usePeople = peopleQuery => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [count, setCount] = useState(null)
  const [people, setPeople] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    const signal = CancelToken.source()
    async function fetchData() {
      try {
        const res = await SWAPI.getTenEntities(peopleQuery, signal.token)
        if (res.data) {
          const {data} = res
          setIsLoading(null)
          setCount(data.count)
          setPeople(data.results)
        } else if (res.response) {
          setIsLoading(null)
          setError(`Error.Error status: ${res.response.status}`)
        }
      } catch (e) {
        if (handlerEventIsCancel(e)) {
          console.log('Message: ', e)
        } else {
          setIsLoading(null)
          setError(`Error:${e.message}`)
        }
      }
    }
    fetchData()
    return () => {
      signal.cancel('Operation canceled by the user.')
    }
  }, [peopleQuery])

  return [isLoading, error, people, count]
}
