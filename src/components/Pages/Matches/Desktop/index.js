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
  handleAddMatch
}) => (
  <div className={classes.root}>
    <div className={classes.headerMatches}>
      <div className={classes.wrButtons}>
        <div className={classes.addMatch} onClick={() => handleAddMatch()}>
          Add
        </div>
      </div>
    </div>

    {isAddMatch && <AddNewMatch onSubmit={onSubmit} />}

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
  handleAddMatch: PropTypes.func
}

export default withStyles(styles)(Matches)
