import { FETCH_BETS } from './types'
import axios from 'axios'

import gC from '../../constants'

/* FETCH BETS */
export const fetchBets = () => async dispatch => {
  try {
    const res = await axios({
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      url: `${gC.API_URL}/api/bets`
    })
    dispatch(createFetchBetsSuccess(res.data))
    return res.data
  } catch (error) {
    console.log('FETCH_BETS error', error)
  }
}

export const createFetchBetsSuccess = data => {
  return {
    type: FETCH_BETS,
    payload: {
      models: data.models,
      success: data.success
    }
  }
}

/* PUT BETS */
export const createBet = data => async () => {
  try {
    const res = await axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': `multipart/form-data`,
        http_x_rest_method: 'PUT'
      },
      data: data,
      url: `${gC.API_URL}/api/bets`
    })
    return res.data
  } catch (error) {
    console.log('PUT_BETS error', error)
  }
}

/* UPDATE BETS */
export const updateBet = data => async () => {
  try {
    const res = await axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': `multipart/form-data`
      },
      data: data,
      url: `${gC.API_URL}/api/bets?id=${data.id}`
    })
    return res.data
  } catch (error) {
    console.log('UPDATE_BETS error', error)
  }
}

/* REMOVE BETS */
export const removeBet = id => async () => {
  try {
    const res = await axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': `multipart/form-data`,
        http_x_rest_method: 'DELETE'
      },
      url: `${gC.API_URL}/api/bets?id=${id}`
    })
    return res.data
  } catch (error) {
    console.log('REMOVE_BETS error', error)
  }
}
