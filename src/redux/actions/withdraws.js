import { FETCH_WITHDRAWS } from './types'
import axios from 'axios'

import gC from '../../constants'

/* FETCH WITHDRAWS */
export const fetchWithdraws = () => async dispatch => {
  try {
    const res = await axios({
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      url: `${gC.API_URL}/api/withdraws`
    })
    dispatch(createFetchWithdrawsSuccess(res.data))
    return res.data
  } catch (error) {
    console.log('FETCH_WITHDRAWS error', error)
  }
}

export const createFetchWithdrawsSuccess = data => {
  return {
    type: FETCH_WITHDRAWS,
    payload: {
      models: data.models,
      success: data.success
    }
  }
}

/* PUT WITHDRAWS */
export const createWithdraw = data => async () => {
  try {
    const res = await axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': `multipart/form-data`,
        http_x_rest_method: 'PUT'
      },
      data: data,
      url: `${gC.API_URL}/api/withdraws`
    })
    return res.data
  } catch (error) {
    console.log('PUT_WITHDRAWS error', error)
  }
}

/* UPDATE WITHDRAWS */
export const updateWithdraw = data => async () => {
  try {
    const res = await axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': `multipart/form-data`
      },
      data: data,
      url: `${gC.API_URL}/api/withdraws?id=${data.id}`
    })
    return res.data
  } catch (error) {
    console.log('UPDATE_WITHDRAWS error', error)
  }
}

/* REMOVE WITHDRAWS */
export const removeWithdraw = id => async () => {
  try {
    const res = await axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': `multipart/form-data`,
        http_x_rest_method: 'DELETE'
      },
      url: `${gC.API_URL}/api/withdraws?id=${id}`
    })
    return res.data
  } catch (error) {
    console.log('REMOVE_WITHDRAWS error', error)
  }
}
