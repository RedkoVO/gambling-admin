import compose from 'recompose/compose'
import { withHandlers, lifecycle, withState, pure } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { fetchMatches, createMatches } from '../../../redux/actions/matches'

import Matches from '../../../components/Pages/Matches/Desktop'

const FORM_NAME = 'newMatches'

const mapStateToProps = state => ({
  matchesData: state.matches.matches
})

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: FORM_NAME
  }),
  withState('isAddMatch', 'setAddMatch', false),
  withHandlers({
    handleAddMatch: ({ setAddMatch, isAddMatch }) => () => {
      setAddMatch(!isAddMatch)
    },
    
    onSubmit: ({ dispatch, handleSubmit }) =>
      handleSubmit(variables => {
        dispatch(createMatches(variables))
        .then(res => {
          if (res.success) {
            dispatch(fetchMatches())
          }
        })
        .catch(err => {
          console.log('Error users:', err)
        })
      })
  }),
  lifecycle({
    componentDidMount() {
      const { dispatch } = this.props

      dispatch(fetchMatches())
    }
  }),
  pure
)(Matches)
