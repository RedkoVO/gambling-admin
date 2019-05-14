import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import users from './users'
import admins from './admins'
import matches from './matches'

const appReducer = combineReducers({
  form,
  users,
  admins,
  matches
})

export default (state, action) => appReducer(state, action)
