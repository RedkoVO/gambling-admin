import { FETCH_WITHDRAWS } from '../actions/types'

const initialState = {
  withdraws: []
}

const withdraws = (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case FETCH_WITHDRAWS:
      return {
        ...state,
        withdraws: payload.models,
        success: payload.success
      }
    default:
      return state
  }
}

export default withdraws
