import compose from 'recompose/compose'
import { withHandlers, withState, pure } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import {
  fetchGames,
  updateGame,
  removeGame,
  updateImagesGame
} from '../../../../redux/actions/games'

import Game from '../../../../components/Pages/Games/components/Game'

const FORM_NAME = 'game'

const mapStateToProps = (state, ownProps) => ({
  form: `${FORM_NAME}-${ownProps.id}`,
  initialValues: {
    title: ownProps.data.title,
    code: ownProps.data.code
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

    handleUpdateImages: ({ dispatch, data, setShowMore }) => e => {
      const images = []

      Array.from(e.target.files).forEach(item => {
        images.push(item)
      })

      dispatch(updateImagesGame(images, data.id))
        .then(res => {
          if (res.success) {
            dispatch(fetchGames())
            setShowMore(false)
          }
        })
        .catch(err => {
          console.log('Error create img:', err)
        })
    },

    onSubmit: ({ dispatch, handleSubmit, data }) =>
      handleSubmit(variables => {
        const dataReqest = {
          id: data.id,
          title: variables.title,
          code: variables.code
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
