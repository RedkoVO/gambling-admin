import React from 'react'
import { compose, pure } from 'recompose'
import { Redirect, Switch, withRouter } from 'react-router-dom'

import RoutePage from '../RoutePage/RoutePage'
import Dashboard from '../../../Dashboard'

import withToken from '../../../../hocs/withToken'

const RootRoute = props => {
  const { location, /* token */ } = props

  const tmpToken = 'sdfjsldfhlasdf'

  return (
    <Switch location={location}>
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
