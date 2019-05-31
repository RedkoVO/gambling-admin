import { FETCH_DEPOSITS } from './types'
import axios from 'axios'

import gC from '../../constants'

/* FETCH DEPOSITS */
export const fetchDeposits = () => async dispatch => {
  try {
    const res = await axios({
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      url: `${gC.API_URL}/api/deposits`
    })
    dispatch(createFetchDepositsSuccess(res.data))
    return res.data
  } catch (error) {
    console.log('FETCH_DEPOSITS error', error)
  }
}

export const createFetchDepositsSuccess = data => {
  return {
    type: FETCH_DEPOSITS,
    payload: {
      models: data.models,
      success: data.success
    }
  }
}

/* PUT DEPOSITS */
export const createDeposit = data => async () => {
  try {
    const res = await axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': `multipart/form-data`,
        http_x_rest_method: 'PUT'
      },
      data: data,
      url: `${gC.API_URL}/api/deposits`
    })
    return res.data
  } catch (error) {
    console.log('PUT_DEPOSITS error', error)
  }
}

/* UPDATE DEPOSITS */
export const updateDeposit = data => async () => {
  try {
    const res = await axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': `multipart/form-data`
      },
      data: data,
      url: `${gC.API_URL}/api/deposits?id=${data.id}`
    })
    return res.data
  } catch (error) {
    console.log('UPDATE_DEPOSITS error', error)
  }
}

/* REMOVE DEPOSITS */
export const removeDeposit = id => async () => {
  try {
    const res = await axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': `multipart/form-data`,
        http_x_rest_method: 'DELETE'
      },
      url: `${gC.API_URL}/api/deposits?id=${id}`
    })
    return res.data
  } catch (error) {
    console.log('REMOVE_DEPOSITS error', error)
  }
}
