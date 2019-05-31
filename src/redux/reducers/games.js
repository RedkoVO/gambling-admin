import { FETCH_GAMES } from '../actions/types'

const initialState = {
  games: []
}

const games = (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case FETCH_GAMES:
      return {
        ...state,
        games: payload.models,
        domain: payload.domain,
        success: payload.success
      }
    default:
      return state
  }
}

export default games
