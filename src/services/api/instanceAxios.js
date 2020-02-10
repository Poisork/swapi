import axios from 'axios'
import RESOURCE from './resource'

export default axios.create({
  baseURL: RESOURCE,
})
