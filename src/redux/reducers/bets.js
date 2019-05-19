import { FETCH_BETS } from '../actions/types'

const initialState = {
  bets: []
}

const bets = (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case FETCH_BETS:
      return {
        ...state,
        bets: payload.models,
        success: payload.success
      }
    default:
      return state
  }
}

export default bets
