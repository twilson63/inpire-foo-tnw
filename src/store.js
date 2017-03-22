import { createStore, applyMiddleware } from 'redux'
import { connect } from 'react-redux'
import thunk from 'redux-thunk'
import fetch from 'isomorphic-fetch'
const url = process.env.REACT_APP_URL

import { merge } from 'ramda'

// action types
const QUOTE = 'QUOTE'

// create root reducer and just return state
const rootReducer = function (state={
  title: 'Inspire',
  quote: ''
}, action) {
  switch (action.type) {
    case QUOTE:
      return merge(state, { quote: action.payload })
    default:
      return state
  }
}

// create store
const store = createStore(rootReducer, applyMiddleware(thunk))

// create map function that maps all of store state
// to component props
const mapStateToProps = (state) => state

const mapActionsToProps = function (dispatch) {
  // action creator dispatchQuote
  const dispatchQuote = quote => dispatch({type: QUOTE, payload: quote})

  return {
    getQuote: () => fetch(url).then(res => res.json()).then(dispatchQuote)
  }
}

// create connector function
const connector = connect(mapStateToProps, mapActionsToProps)

// export store and connector function
export { store, connector }
