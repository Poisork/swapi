export default {
  changeFetchingData: isLoading => ({
    type: 'CHANGE_FETCHING_STATUS',
    isLoading,
  }),
  setEntityData: payload => ({
    type: 'SET_ENTITY_DATA',
    payload,
  }),
  setError: error => ({
    type: 'SET_ERROR',
    error,
  }),
}
