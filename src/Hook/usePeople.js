/* eslint-disable no-console */
import {useReducer, useEffect} from 'react'
import CancelToken, {handlerEventIsCancel} from '../services/api/cancelToken'
import SWAPI from '../services/api/SWAPI'
import reducer, {initialState} from './reducers/peopleReducer'
import peopleAC from './actionCreators/peopleAC'

export const usePeople = peopleQuery => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const signal = CancelToken.source()
    async function fetchData() {
      dispatch(peopleAC.changeFetchingData(true))
      try {
        const res = await SWAPI.getTenEntities(peopleQuery, signal.token)
        if (res.data) {
          const {data} = res
          dispatch(
            peopleAC.setEntityData({
              people: data.results,
              count: data.count,
              isLoading: false,
              error: '',
            }),
          )
        } else if (res.status < 200) {
          dispatch(peopleAC.changeFetchingData(false))
          dispatch(
            peopleAC.setError(`Error.Error status: ${res.response.status}`),
          )
        }
      } catch (e) {
        if (handlerEventIsCancel(e)) {
          console.log('Message: ', e)
        } else {
          dispatch(peopleAC.changeFetchingData(false))
          dispatch(peopleAC.setError(`Error:${e.message}`))
        }
      }
    }
    fetchData()
    return () => {
      signal.cancel('Operation canceled by the user.')
    }
  }, [peopleQuery])

  return [state, dispatch]
}
