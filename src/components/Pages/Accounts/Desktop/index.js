import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const Accounts = ({ classes, accountsData }) => (
  <div className={classes.root}>
    {accountsData.map(item => (
      <div className={classes.accountItem} key={item.id}>
        <div className={classes.id}>ID: {item.id}</div>
        <div className={classes.email}>Email: {item.email}</div>
        <div className={classes.name}>Name: {item.name}</div>
        <div className={classes.age}>Age: {item.age}</div>
      </div>
    ))}
  </div>
)

Accounts.propTypes = {
  classes: PropTypes.object,
  accountsData: PropTypes.array
}

export default withStyles(styles)(Accounts)
