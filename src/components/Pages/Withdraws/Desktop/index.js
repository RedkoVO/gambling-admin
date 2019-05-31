import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Withdraw from '../../../../containers/Pages/Withdraws/Withdraw'
import AddNewWithdraw from '../components/AddNewWithdraw'

import styles from './styles'

const Withdraws = ({
  classes,
  withdrawsData,
  onSubmit,
  isAddWithdraw,
  handleAddWithdraw,
  handleChangeRole,
  roleValue
}) => (
  <div className={classes.root}>
    <div className={classes.headerWithdraws}>
      <div className={classes.wrButtons}>
        <div className={classes.addWithdraw} onClick={() => handleAddWithdraw()}>
          Add
        </div>
      </div>
    </div>

    {isAddWithdraw && (
      <AddNewWithdraw
        roleValue={roleValue}
        onSubmit={onSubmit}
        handleChangeRole={handleChangeRole}
      />
    )}

    {withdrawsData.map(item => (
      <Withdraw id={item.id} data={item} key={item.id} />
    ))}
  </div>
)

Withdraws.propTypes = {
  classes: PropTypes.object,
  isAddWithdraw: PropTypes.bool,
  withdrawsData: PropTypes.array,
  onSubmit: PropTypes.func,
  handleAddWithdraw: PropTypes.func,
  handleChangeRole: PropTypes.func,
  roleValue: PropTypes.number
}

export default withStyles(styles)(Withdraws)
