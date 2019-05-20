import compose from 'recompose/compose'
import { withHandlers, withState, pure } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form'

import {
  fetchMatches,
  createParameter
} from '../../../../../redux/actions/matches'

import Parameters from '../../../../../components/Pages/Matches/components/Match/components/Parameters'

const FORM_NAME = 'newParameters'

export default compose(
  connect(),
  reduxForm({
    form: FORM_NAME
  }),
  withState('isAddParameter', 'setAddParameter', false),
  withHandlers({
    handleAddParameter: ({ setAddParameter, isAddParameter }) => () => {
      setAddParameter(!isAddParameter)
    },

    onSubmit: ({ dispatch, handleSubmit, matchId }) =>
      handleSubmit(variables => {
        const data = {
          match_id: matchId,
          ...variables
        }
        dispatch(createParameter(data))
          .then(res => {
            if (res.success) {
              dispatch(fetchMatches())
              dispatch(reset('newParameters'))
            }
          })
          .catch(err => {
            console.log('Error parameters:', err)
          })
      })
  }),
  pure
)(Parameters)
