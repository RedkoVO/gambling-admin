import { FETCH_DEPOSITS } from '../actions/types'

const initialState = {
  deposits: []
}

const deposits = (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case FETCH_DEPOSITS:
      return {
        ...state,
        deposits: payload.models,
        success: payload.success
      }
    default:
      return state
  }
}

export default deposits
