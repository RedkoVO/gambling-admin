import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Bet from '../../../../containers/Pages/Bets/Bet'
import AddNewBet from '../components/AddNewBet'

import styles from './styles'

const Bets = ({
  classes,
  betsData,
  onSubmit,
  isAddBet,
  handleAddBet,
  handleChangeRole,
  roleValue
}) => (
  <div className={classes.root}>
    <div className={classes.headerBets}>
      <div className={classes.wrButtons}>
        <div className={classes.addBet} onClick={() => handleAddBet()}>
          Add
        </div>
      </div>
    </div>

    {isAddBet && (
      <AddNewBet
        roleValue={roleValue}
        onSubmit={onSubmit}
        handleChangeRole={handleChangeRole}
      />
    )}

    {betsData.map(item => (
      <Bet id={item.id} data={item} key={item.id} />
    ))}
  </div>
)

Bets.propTypes = {
  classes: PropTypes.object,
  isAddBet: PropTypes.bool,
  betsData: PropTypes.array,
  onSubmit: PropTypes.func,
  handleAddBet: PropTypes.func,
  handleChangeRole: PropTypes.func,
  roleValue: PropTypes.number
}

export default withStyles(styles)(Bets)
