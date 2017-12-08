
// Actions
const FETCH_REQUEST = 'activities/FETCH_REQUEST'

// State
const initialState = {
  accidents: [],
  filters: [],
  loading: true
}

// Reducer
export const reducer = (state = initialState, action) => {
  // FETCH
  switch (action.type) {
    case FETCH_REQUEST:
      return {...state,
        items: [],
        isFetching: true,
        error: null
      }

    default:
      return state
  }
}

// Action creators

