import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const Users = ({ classes, usersData }) => (
  <div className={classes.root}>
    {usersData.map(item => (
      <div className={classes.usersItem} key={item.id}>
        <div className={classes.id}>ID: {item.id}</div>
        <div className={classes.email}>Email: {item.email}</div>
        <div className={classes.name}>Name: {item.name}</div>
        <div className={classes.age}>Age: {item.age}</div>
      </div>
    ))}
  </div>
)

Users.propTypes = {
  classes: PropTypes.object,
  usersData: PropTypes.array
}

export default withStyles(styles)(Users)
