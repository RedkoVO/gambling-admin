import { FETCH_ADMINS } from './types'
import axios from 'axios'

import gC from '../../constants'

/* FETCH ADMINS */
export const fetchAdmins = () => async dispatch => {
  try {
    const res = await axios({
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      url: `${gC.API_URL}/api/admins`
    })
    dispatch(createFetchAdminsSuccess(res.data))
    return res.data
  } catch (error) {
    console.log('FETCH_ADMINS error', error)
  }
}

export const createFetchAdminsSuccess = data => {
  return {
    type: FETCH_ADMINS,
    payload: {
      success: data.success
    }
  }
}
