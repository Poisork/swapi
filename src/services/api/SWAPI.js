import instanceAxios from './instanceAxios'

export default {
  getTenEntities: async (query, myCancelToken) => {
    const res = await instanceAxios.get(`${query}`, {
      cancelToken: myCancelToken,
    })
    return res
  },
}
