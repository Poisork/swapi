/* eslint-disable no-console */
import {useState, useEffect} from 'react'
import axios from 'axios'
import {getResource} from '../api/SWAPI'

export const usePeople = peopleQuery => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [count, setCount] = useState(null)
  const [people, setPeople] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    const signal = axios.CancelToken.source()
    async function fetchData() {
      try {
        const res = await getResource(peopleQuery, signal.token)
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
        if (axios.isCancel(e)) {
          console.log('Error: ', e.message)
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
