import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import cn from 'classnames'

import styles from './styles'

const Dashboard = ({ classes, isShowMenu }) => (
  <div className={cn(classes.root, { hiddenMenu: !isShowMenu })}>MAIN</div>
)

Dashboard.propTypes = {
  classes: PropTypes.object,
  isShowMenu: PropTypes.bool.isRequired
}

export default withStyles(styles)(Dashboard)
