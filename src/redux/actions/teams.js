import { FETCH_TEAMS } from './types'
import axios from 'axios'

import gC from '../../constants'

/* FETCH TEAMS */
export const fetchTeams = () => async dispatch => {
  try {
    const res = await axios({
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      url: `${gC.API_URL}/api/teams`
    })
    dispatch(createFetchTeamsSuccess(res.data))
    return res.data
  } catch (error) {
    console.log('FETCH_TEAMS error', error)
  }
}

export const createFetchTeamsSuccess = data => {
  return {
    type: FETCH_TEAMS,
    payload: {
      models: data.models,
      success: data.success
    }
  }
}

/* PUT TEAMS */
export const createTeam = data => async () => {
  try {
    const res = await axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': `multipart/form-data`,
        http_x_rest_method: 'PUT'
      },
      data: data,
      url: `${gC.API_URL}/api/teams`
    })
    return res.data
  } catch (error) {
    console.log('PUT_TEAMS error', error)
  }
}

/* UPDATE TEAMS */
export const updateTeam = data => async () => {
  try {
    const res = await axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': `multipart/form-data`
      },
      data: data,
      url: `${gC.API_URL}/api/teams?id=${data.id}`
    })
    return res.data
  } catch (error) {
    console.log('UPDATE_TEAMS error', error)
  }
}

/* REMOVE TEAMS */
export const removeTeam = id => async () => {
  try {
    const res = await axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': `multipart/form-data`,
        http_x_rest_method: 'DELETE'
      },
      url: `${gC.API_URL}/api/teams?id=${id}`
    })
    return res.data
  } catch (error) {
    console.log('REMOVE_TEAMS error', error)
  }
}
