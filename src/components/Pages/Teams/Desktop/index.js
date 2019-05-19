import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Team from '../../../../containers/Pages/Teams/Team'
import AddNewTeam from '../components/AddNewTeam'

import styles from './styles'

const Teams = ({
  classes,
  teamsData,
  onSubmit,
  isAddTeam,
  handleAddTeam,
  handleChangeRole,
  roleValue
}) => (
  <div className={classes.root}>
    <div className={classes.headerTeams}>
      <div className={classes.wrButtons}>
        <div className={classes.addTeam} onClick={() => handleAddTeam()}>
          Add
        </div>
      </div>
    </div>

    {isAddTeam && (
      <AddNewTeam
        roleValue={roleValue}
        onSubmit={onSubmit}
        handleChangeRole={handleChangeRole}
      />
    )}

    {teamsData.map(item => (
      <Team id={item.id} data={item} key={item.id} />
    ))}
  </div>
)

Teams.propTypes = {
  classes: PropTypes.object,
  isAddTeam: PropTypes.bool,
  teamsData: PropTypes.array,
  onSubmit: PropTypes.func,
  handleAddTeam: PropTypes.func,
  handleChangeRole: PropTypes.func,
  roleValue: PropTypes.number
}

export default withStyles(styles)(Teams)
