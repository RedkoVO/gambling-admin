import compose from 'recompose/compose'
import { withHandlers, withState, pure } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import {
  fetchGames,
  updateGame,
  removeGame
} from '../../../../redux/actions/games'

import Game from '../../../../components/Pages/Games/components/Game'

const FORM_NAME = 'game'

const mapStateToProps = (state, ownProps) => ({
  form: `${FORM_NAME}-${ownProps.id}`,
  initialValues: {
    login: ownProps.data.login,
    password: ownProps.data.password
  }
})

export default compose(
  connect(mapStateToProps),
  reduxForm(),
  withState('isShowMore', 'setShowMore', false),
  withState('isConfirmRemoveGame', 'setConfirmRemoveGame', false),
  withHandlers({
    handleShowMore: ({ isShowMore, setShowMore }) => () => {
      setShowMore(!isShowMore)
    },

    handleConfirmRemoveGame: ({
      isConfirmRemoveGame,
      setConfirmRemoveGame
    }) => () => {
      setConfirmRemoveGame(!isConfirmRemoveGame)
    },

    handleRemoveGame: ({ dispatch }) => id => {
      dispatch(removeGame(id))
        .then(res => {
          if (res.success) {
            dispatch(fetchGames())
          }
        })
        .catch(err => {
          console.log('Error delete:', err)
        })
    },

    onSubmit: ({ dispatch, handleSubmit, data }) =>
      handleSubmit(variables => {
        const dataReqest = {
          id: data.id,
          login: variables.login,
          password: variables.password
        }

        dispatch(updateGame(dataReqest))
          .then(res => {
            if (res.success) {
              dispatch(fetchGames())
            }
          })
          .catch(err => {
            console.log('Error update:', err)
          })
      })
  }),
  pure
)(Game)
