import { FETCH_MATCHES } from '../actions/types'

const initialState = {
  matches: []
}

const matches = (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case FETCH_MATCHES:
      return {
        ...state,
        matches: payload.models,
        success: payload.success
      }
    default:
      return state
  }
}

export default matches
