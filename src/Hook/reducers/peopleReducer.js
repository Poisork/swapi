export const initialState = {
  error: '',
  isLoading: false,
  count: null,
  people: null,
}

export default (state, action) => {
  switch (action.type) {
    case 'CHANGE_FETCHING_STATUS':
      return {...state, isLoading: action.isLoading}
    case 'SET_ENTITY_DATA':
      return {
        ...state,
        people: action.payload.people,
        count: action.payload.count,
        isLoading: action.payload.isLoading,
        error: '',
      }
    case 'SET_ERROR':
      return {...state, error: action.error}
    default:
      return state
  }
}
