import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Admin from '../../../../containers/Pages/Admins/Admin'
import AddNewAdmin from '../components/AddNewAdmin'

import styles from './styles'

const Admins = ({
  classes,
  adminsData,
  onSubmit,
  isAddAdmin,
  handleAddAdmin
}) => (
  <div className={classes.root}>
    <div className={classes.headerAdmins}>
      <div className={classes.wrButtons}>
        <div className={classes.addAdmin} onClick={() => handleAddAdmin()}>
          Add
        </div>
      </div>

      {isAddAdmin && <AddNewAdmin onSubmit={onSubmit} />}
    </div>

    {adminsData.map(item => (
      <Admin id={item.id} data={item} key={item.id} />
    ))}
  </div>
)

Admins.propTypes = {
  classes: PropTypes.object,
  isAddAdmin: PropTypes.bool,
  adminsData: PropTypes.array,
  onSubmit: PropTypes.func,
  handleAddAdmin: PropTypes.func
}

export default withStyles(styles)(Admins)
