import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Match from '../../../../containers/Pages/Matches/Match'
import AddNewMatch from '../components/AddNewMatch'

import styles from './styles'

const Matches = ({
  classes,
  matchesData,
  onSubmit,
  isAddMatch,
  startDate,
  finishDate,
  handleStartDate,
  handleFinishDate,
  handleAddMatch,
  handleTeamValue,
  team1Value,
  team2Value,
  teams
}) => (
  <div className={classes.root}>
    <div className={classes.headerMatches}>
      <div className={classes.wrButtons}>
        <div className={classes.addMatch} onClick={() => handleAddMatch()}>
          Add
        </div>
      </div>
    </div>

    {isAddMatch && (
      <AddNewMatch
        onSubmit={onSubmit}
        startDate={startDate}
        finishDate={finishDate}
        handleStartDate={handleStartDate}
        handleFinishDate={handleFinishDate}
        handleTeamValue={handleTeamValue}
        team1Value={team1Value}
        team2Value={team2Value}
        teams={teams}
      />
    )}

    {matchesData.map(item => (
      <Match id={item.id} data={item} key={item.id} />
    ))}
  </div>
)

Matches.propTypes = {
  classes: PropTypes.object,
  isAddMatch: PropTypes.bool,
  matchesData: PropTypes.array,
  onSubmit: PropTypes.func,
  handleAddMatch: PropTypes.func,
  startDate: PropTypes.object,
  finishDate: PropTypes.object,
  handleStartDate: PropTypes.func,
  handleFinishDate: PropTypes.func,
  handleTeamValue: PropTypes.func,
  team1Value: PropTypes.string,
  team2Value: PropTypes.string,
  teams: PropTypes.array
}

export default withStyles(styles)(Matches)
