import compose from 'recompose/compose'
import { withHandlers, withState, pure } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import {
  fetchTeams,
  updateTeam,
  removeTeam
} from '../../../../redux/actions/teams'

import Team from '../../../../components/Pages/Teams/components/Team'

const FORM_NAME = 'team'

const mapStateToProps = (state, ownProps) => ({
  form: `${FORM_NAME}-${ownProps.id}`,
  initialValues: {
    title: ownProps.data.title
  }
})

export default compose(
  connect(mapStateToProps),
  reduxForm(),
  withState('isConfirmRemoveTeam', 'setConfirmRemoveTeam', false),
  withHandlers({
    handleConfirmRemoveTeam: ({
      isConfirmRemoveTeam,
      setConfirmRemoveTeam
    }) => () => {
      setConfirmRemoveTeam(!isConfirmRemoveTeam)
    },

    handleRemoveTeam: ({ dispatch }) => id => {
      dispatch(removeTeam(id))
        .then(res => {
          if (res.success) {
            dispatch(fetchTeams())
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
          title: variables.title
        }

        dispatch(updateTeam(dataReqest))
          .then(res => {
            if (res.success) {
              dispatch(fetchTeams())
            }
          })
          .catch(err => {
            console.log('Error update:', err)
          })
      })
  }),
  pure
)(Team)
