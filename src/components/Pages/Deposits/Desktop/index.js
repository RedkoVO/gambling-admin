import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Deposit from '../../../../containers/Pages/Deposits/Deposit'
import AddNewDeposit from '../components/AddNewDeposit'

import styles from './styles'

const Deposits = ({
  classes,
  depositsData,
  onSubmit,
  isAddDeposit,
  handleAddDeposit,
  handleChangeRole,
  roleValue
}) => (
  <div className={classes.root}>
    <div className={classes.headerDeposits}>
      <div className={classes.wrButtons}>
        <div className={classes.addDeposit} onClick={() => handleAddDeposit()}>
          Add
        </div>
      </div>
    </div>

    {isAddDeposit && (
      <AddNewDeposit
        roleValue={roleValue}
        onSubmit={onSubmit}
        handleChangeRole={handleChangeRole}
      />
    )}

    {depositsData.map(item => (
      <Deposit id={item.id} data={item} key={item.id} />
    ))}
  </div>
)

Deposits.propTypes = {
  classes: PropTypes.object,
  isAddDeposit: PropTypes.bool,
  depositsData: PropTypes.array,
  onSubmit: PropTypes.func,
  handleAddDeposit: PropTypes.func,
  handleChangeRole: PropTypes.func,
  roleValue: PropTypes.number
}

export default withStyles(styles)(Deposits)
