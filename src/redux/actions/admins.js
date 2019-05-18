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
      models: data.models,
      success: data.success
    }
  }
}

/* PUT ADMIN */
export const createAdmin = data => async () => {
  try {
    const res = await axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': `multipart/form-data`,
        http_x_rest_method: 'PUT'
      },
      data: data,
      url: `${gC.API_URL}/api/admins`
    })
    return res.data
  } catch (error) {
    console.log('PUT_ADMIN error', error)
  }
}

/* UPDATE ADMIN */
export const updateAdmin = data => async () => {
  try {
    const res = await axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': `multipart/form-data`
      },
      data: data,
      url: `${gC.API_URL}/api/admins?id=${data.id}`
    })
    return res.data
  } catch (error) {
    console.log('UPDATE_ADMIN error', error)
  }
}

/* REMOVE ADMIN */
export const removeAdmin = id => async () => {
  try {
    const res = await axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': `multipart/form-data`,
        http_x_rest_method: 'DELETE'
      },
      url: `${gC.API_URL}/api/admins?id=${id}`
    })
    return res.data
  } catch (error) {
    console.log('REMOVE_ADMIN error', error)
  }
}
