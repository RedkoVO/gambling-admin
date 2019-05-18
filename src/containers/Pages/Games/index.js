import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withState, withHandlers, lifecycle, pure } from 'recompose'
import { reduxForm } from 'redux-form'

import { fetchGames, createGame } from '../../../redux/actions/games'

import Games from '../../../components/Pages/Games/Desktop'

const FORM_NAME = 'newGame'

const mapStateToProps = state => ({
  gamesData: state.games.games
})

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: FORM_NAME
  }),
  withState('isAddGame', 'setAddGame', false),
  withHandlers({
    handleAddGame: ({ setAddGame, isAddGame }) => () => {
      setAddGame(!isAddGame)
    },

    onSubmit: ({ dispatch, handleSubmit }) =>
      handleSubmit(variables => {
        dispatch(createGame(variables))
          .then(res => {
            if (res.success) {
              dispatch(fetchGames())
            }
          })
          .catch(err => {
            console.log('Error games:', err)
          })
      })
  }),
  lifecycle({
    componentDidMount() {
      const { dispatch } = this.props

      dispatch(fetchGames())
    }
  }),
  pure
)(Games)
