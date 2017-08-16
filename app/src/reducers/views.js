const views = (state = [], action) => {
  switch(action) {
    case 'TOGGLE_VIEW':
      return {...state}
  }
  return state;
}

export default views;