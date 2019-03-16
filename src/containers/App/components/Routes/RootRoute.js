import React from 'react'
import { compose, pure } from 'recompose'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'

import RoutePage from '../RoutePage/RoutePage'
import Auth from '../../../Auth'
import Dashboard from '../../../Dashboard'

import withToken from '../../../../hocs/withToken'

const RootRoute = props => {
  const { location, /* token */ } = props

  const tmpToken = ''

  return (
    <Switch location={location}>
      {tmpToken ? (
        <Redirect exact from="/login" to="/" />
      ) : (
        <Redirect exact from="/" to="/login" />
      )}

      {!tmpToken && <Route path={`/login`} component={Auth} />}

      {/* {token && <RoutePage path={`/`} component={Dashboard} />} */}
      {tmpToken && <RoutePage path={`/`} component={Dashboard} />}

      <Redirect to="/" />
    </Switch>
  )
}

export default compose(
  withRouter,
  withToken,
  pure
)(RootRoute)
