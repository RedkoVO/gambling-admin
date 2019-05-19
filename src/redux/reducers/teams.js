import { FETCH_TEAMS } from '../actions/types'

const initialState = {
  teams: []
}

const teams = (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case FETCH_TEAMS:
      return {
        ...state,
        teams: payload.models,
        success: payload.success
      }
    default:
      return state
  }
}

export default teams
