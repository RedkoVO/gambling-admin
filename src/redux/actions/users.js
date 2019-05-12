import { FETCH_USERS } from './types'
import axios from 'axios'

import gC from '../../constants'

/* FETCH USERS */
export const fetchUsers = () => async dispatch => {
  try {
    const res = await axios({
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      url: `${gC.API_URL}/api/users`
    })
    dispatch(createFetchUsersSuccess(res.data))
    return res.data
  } catch (error) {
    console.log('FETCH_USERS error', error)
  }
}

export const createFetchUsersSuccess = data => {
  return {
    type: FETCH_USERS,
    payload: {
      success: data.success
    }
  }
}
