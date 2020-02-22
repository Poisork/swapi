export function init(initPage) {
  return {
    activePage: initPage,
  }
}
export default (state, action) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return {...state, activePage: action.page}
    default:
      return state
  }
}
