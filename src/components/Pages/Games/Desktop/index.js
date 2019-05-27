import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Game from '../../../../containers/Pages/Games/Game'
import AddNewGame from '../components/AddNewGame'

import styles from './styles'

const Games = ({
  classes,
  gamesData,
  onSubmit,
  isAddGame,
  handleAddGame,
  handleChangeRole,
  handleUploadImage,
  roleValue
}) => (
  <div className={classes.root}>
    <div className={classes.headerGames}>
      <div className={classes.wrButtons}>
        <div className={classes.addGame} onClick={() => handleAddGame()}>
          Add
        </div>
      </div>
    </div>

    {isAddGame && (
      <AddNewGame
        roleValue={roleValue}
        onSubmit={onSubmit}
        handleChangeRole={handleChangeRole}
        handleUploadImage={handleUploadImage}
      />
    )}

    {gamesData.map(item => (
      <Game id={item.id} data={item} key={item.id} />
    ))}
  </div>
)

Games.propTypes = {
  classes: PropTypes.object,
  isAddGame: PropTypes.bool,
  gamesData: PropTypes.array,
  onSubmit: PropTypes.func,
  handleAddGame: PropTypes.func,
  handleChangeRole: PropTypes.func,
  handleUploadImage: PropTypes.func,
  roleValue: PropTypes.number
}

export default withStyles(styles)(Games)
