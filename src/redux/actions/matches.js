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

/* PUT MATCHE */
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
    console.log('PUT_MATCHE error', error)
  }
}

/* UPDATE MATCH */
export const updateMatch = data => async () => {
  try {
    const res = await axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': `multipart/form-data`
      },
      data: data,
      url: `${gC.API_URL}/api/matches?id=${data.id}`
    })
    return res.data
  } catch (error) {
    console.log('UPDATE_MATCH error', error)
  }
}

/* REMOVE MATCH */
export const removeMatch = id => async () => {
  try {
    const res = await axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': `multipart/form-data`,
        http_x_rest_method: 'DELETE'
      },
      url: `${gC.API_URL}/api/matches?id=${id}`
    })
    return res.data
  } catch (error) {
    console.log('REMOVE_MATCH error', error)
  }
}

/* --- PARAMETERS --- */
/* PUT PARAMETER */
export const createParameter = data => async () => {
  try {
    const res = await axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': `multipart/form-data`,
        http_x_rest_method: 'PUT'
      },
      data: data,
      url: `${gC.API_URL}/api/match-parameters`
    })
    return res.data
  } catch (error) {
    console.log('PUT_PARAMETER error', error)
  }
}

/* UPDATE PARAMETER */
export const updateParameter = data => async () => {
  try {
    const res = await axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': `multipart/form-data`
      },
      data: data,
      url: `${gC.API_URL}/api/match-parameters?id=${data.id}`
    })
    return res.data
  } catch (error) {
    console.log('UPDATE_PARAMETER error', error)
  }
}

/* REMOVE PARAMETER */
export const removeParameter = id => async () => {
  try {
    const res = await axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': `multipart/form-data`,
        http_x_rest_method: 'DELETE'
      },
      url: `${gC.API_URL}/api/match-parameters?id=${id}`
    })
    return res.data
  } catch (error) {
    console.log('REMOVE_PARAMETER error', error)
  }
}