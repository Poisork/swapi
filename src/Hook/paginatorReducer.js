export const initialState = {
  page: 1,
}

export default (state, action) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return {...state, page: action.page}
    default:
      return state
  }
}
