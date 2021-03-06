import React from 'react'
import { compose, pure } from 'recompose'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'

import RoutePage from '../RoutePage/RoutePage'
import Auth from '../../../Auth'
import Admins from '../../../Pages/Admins'
import Users from '../../../Pages/Users'
import Matches from '../../../Pages/Matches'
import Games from '../../../Pages/Games'
import Teams from '../../../Pages/Teams'
import Bets from '../../../Pages/Bets'
import Deposits from '../../../Pages/Deposits'
import Withdraws from '../../../Pages/Withdraws'

import withToken from '../../../../hocs/withToken'

const RootRoute = props => {
  const { location /* token */ } = props

  const tmpToken = 'yyy'

  return (
    <Switch location={location}>
      {tmpToken ? (
        <Redirect exact from="/login" to="/" />
      ) : (
        <Redirect exact from="/" to="/login" />
      )}

      {!tmpToken && <Route path={`/login`} component={Auth} />}

      {tmpToken && <RoutePage path={`/users`} component={Users} />}
      {tmpToken && <RoutePage path={`/matches`} component={Matches} />}
      {tmpToken && <RoutePage path={`/games`} component={Games} />}
      {tmpToken && <RoutePage path={`/teams`} component={Teams} />}
      {tmpToken && <RoutePage path={`/bets`} component={Bets} />}
      {tmpToken && <RoutePage path={`/deposits`} component={Deposits} />}
      {tmpToken && <RoutePage path={`/withdraws`} component={Withdraws} />}

      {tmpToken && <RoutePage path={`/`} component={Admins} />}

      <Redirect to="/" />
    </Switch>
  )
}

export default compose(
  withRouter,
  withToken,
  pure
)(RootRoute)
