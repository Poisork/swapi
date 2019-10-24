import {RESOURCE} from './APIUtils'
import axios from 'axios'
  
export const getResource = async (query) => { 
    try {
        const res = await axios(`${RESOURCE}/${query}`)
        return res
    } catch (err) {  
        console.error(err)
        return err
    }
} 