import { FETCH_ADMINS } from '../actions/types'

const initialState = {
  admins: []
}

const admins = (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case FETCH_ADMINS:
      return {
        ...state,
        admins: payload.models,
        success: payload.success
      }
    default:
      return state
  }
}

export default admins
