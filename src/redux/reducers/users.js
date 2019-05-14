import { FETCH_USERS } from '../actions/types'

const initialState = {
  users: []
}

const users = (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case FETCH_USERS:
      return {
        ...state,
        users: payload.models,
        success: payload.success
      }
    default:
      return state
  }
}

export default users
