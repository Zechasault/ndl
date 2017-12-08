import accidents from '../data/db.json'
// Actions
const SET_FILTER = 'accidents/SET_FILTER'

// State
const initialState = {
  items: accidents,
  loading: false
}

// Reducer
export const reducer = (state = initialState, action) => {
  // FETCH
  switch (action.type) {
    default:
      return state
  }
}
