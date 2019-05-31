import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import users from './users'
import admins from './admins'
import matches from './matches'
import games from './games'
import teams from './teams'
import bets from './bets'
import deposits from './deposits'
import withdraws from './withdraws'

const appReducer = combineReducers({
  form,
  users,
  admins,
  matches,
  games,
  teams,
  bets,
  deposits,
  withdraws,
})

export default (state, action) => appReducer(state, action)
