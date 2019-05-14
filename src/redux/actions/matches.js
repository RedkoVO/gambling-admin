import { FETCH_MATCHES } from './types'
import axios from 'axios'

import gC from '../../constants'

/* FETCH MATCHES */
export const fetchMatches = () => async dispatch => {
  try {
    const res = await axios({
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      url: `${gC.API_URL}/api/matches`
    })
    dispatch(createFetchMatchesSuccess(res.data))
    return res.data
  } catch (error) {
    console.log('FETCH_MATCHES error', error)
  }
}

export const createFetchMatchesSuccess = data => {
  return {
    type: FETCH_MATCHES,
    payload: {
      models: data.models,
      success: data.success
    }
  }
}

/* PUT MATCHES */
export const createMatches = data => async () => {
  try {
    const res = await axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': `multipart/form-data`,
        http_x_rest_method: 'PUT'
      },
      data: data,
      url: `${gC.API_URL}/api/matches`
    })
    return res.data
  } catch (error) {
    console.log('PUT_MATCHES error', error)
  }
}
