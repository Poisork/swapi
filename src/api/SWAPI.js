/* eslint-disable no-useless-catch */
import axios from 'axios'
import {RESOURCE} from './APIUtils'

export const getResource = async (query, myCancelToken) => {
  try {
    const res = await axios(`${RESOURCE}/${query}`, {
      cancelToken: myCancelToken,
    })
    return res
  } catch (err) {
    throw err
  }
}
