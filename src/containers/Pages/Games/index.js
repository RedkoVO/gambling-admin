import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withState, withHandlers, lifecycle, pure } from 'recompose'
import { reduxForm } from 'redux-form'

import { fetchGames, createGame } from '../../../redux/actions/games'

import Games from '../../../components/Pages/Games/Desktop'

const FORM_NAME = 'newGame'

const mapStateToProps = state => ({
  gamesData: state.games.games,
  domain: state.games.domain,
})

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: FORM_NAME
  }),
  withState('isAddGame', 'setAddGame', false),
  withState('imagesUploaded', 'setImage', []),
  withHandlers({
    handleAddGame: ({ setAddGame, isAddGame }) => () => {
      setAddGame(!isAddGame)
    },

    handleUploadImage: ({ setImage }) => e => {
      const images = []

      Array.from(e.target.files).forEach(item => {
        images.push(item)
      })

      setImage(images)
    },

    onSubmit: ({ dispatch, handleSubmit, imagesUploaded }) =>
      handleSubmit(variables => {
        const data = new FormData()
        data.set('title', variables.title)
        data.set('code', variables.code)

        imagesUploaded.forEach((item, index) => {
          data.set(`img_url[${index}]`, item)
        })

        dispatch(createGame(data))
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
