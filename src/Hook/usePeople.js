/* eslint-disable no-console */
import {useState, useEffect} from 'react'
import CancelToken, {handlerEventIsCancel} from '../services/api/cancelToken'
import SWAPI from '../services/api/SWAPI'

export const usePeople = peopleQuery => {
  const [error, setError] = useState('')
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
          setCount(data.count)
          setPeople(data.results)
          setIsLoading(false)
          setError('')
        } else if (res.status < 200) {
          setIsLoading(false)
          setError(`Error.Error status: ${res.response.status}`)
        }
      } catch (e) {
        if (handlerEventIsCancel(e)) {
          console.log('Message: ', e)
        } else {
          setIsLoading(false)
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
