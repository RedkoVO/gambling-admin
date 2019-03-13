import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import PageLayout from '../../../../components/App/PageLayout'

// const mapStateToProps = state => {
//   return {
//     checkAuthUser: state.auth
//   }
// }

class RoutePage extends Component {
  // componentDidMount() {
  //   const { dispatch } = this.props
  //   dispatch(checkAuth())
  // }

  render() {
    const { location, checkAuthUser, component, ...rest } = this.props
    // const isAuth = checkAuthUser.checkAuth
    //   ? checkAuthUser.checkAuth.isAuth
    //   : false

    return (
      <Route
        {...rest}
        render={props => {
          return <PageLayout {...props} content={component} />
        }}
      />
    )
  }
}

RoutePage.propTypes = {
  checkAuthUser: PropTypes.object,
  dispatch: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object
}

// export default connect(mapStateToProps)(RoutePage)
export default RoutePage
