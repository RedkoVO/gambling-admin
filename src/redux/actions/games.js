import { FETCH_GAMES } from './types'
import axios from 'axios'

import gC from '../../constants'

/* FETCH ADMINS */
export const fetchGames = () => async dispatch => {
  try {
    const res = await axios({
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      url: `${gC.API_URL}/api/games`
    })
    dispatch(createFetchGamesSuccess(res.data))
    return res.data
  } catch (error) {
    console.log('FETCH_GAMES error', error)
  }
}

export const createFetchGamesSuccess = data => {
  return {
    type: FETCH_GAMES,
    payload: {
      models: data.models,
      domain: data.domain,
      success: data.success
    }
  }
}

/* PUT GAMES */
export const createGame = data => async () => {
  try {
    const res = await axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': `multipart/form-data`,
        http_x_rest_method: 'PUT'
      },
      data: data,
      url: `${gC.API_URL}/api/games`
    })
    return res.data
  } catch (error) {
    console.log('PUT_GAMES error', error)
  }
}

/* UPDATE GAMES */
export const updateGame = data => async () => {
  try {
    const res = await axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': `multipart/form-data`
      },
      data: data,
      url: `${gC.API_URL}/api/games?id=${data.id}`
    })
    return res.data
  } catch (error) {
    console.log('UPDATE_GAMES error', error)
  }
}

/* REMOVE GAMES */
export const removeGame = id => async () => {
  try {
    const res = await axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': `multipart/form-data`,
        http_x_rest_method: 'DELETE'
      },
      url: `${gC.API_URL}/api/games?id=${id}`
    })
    return res.data
  } catch (error) {
    console.log('REMOVE_GAMES error', error)
  }
}
