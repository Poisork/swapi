import axios from 'axios'

export default axios.CancelToken

export const handlerEventIsCancel = e => axios.isCancel(e)
