const views = (state = [], action) => {
  switch(action) {
    case 'TOGGLE_VIEW':
      return {...state}
    default:
      return state
  }
  return state;
}

export default views;