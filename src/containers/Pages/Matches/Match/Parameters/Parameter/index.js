import compose from 'recompose/compose'
import { withHandlers, withState, pure } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import {
  fetchMatches,
  updateParameter,
  removeParameter
} from '../../../../../../redux/actions/matches'

import Parameter from '../../../../../../components/Pages/Matches/components/Match/components/Parameters/components/Parameter'

const FORM_NAME = 'parameter'

const mapStateToProps = (state, ownProps) => ({
  form: `${FORM_NAME}-${ownProps.id}`,
  initialValues: {
    title: ownProps.data.title,
    param1_title: ownProps.data.param1_title,
    param2_title: ownProps.data.param2_title,
    param3_title: ownProps.data.param3_title,
    param1_coef: ownProps.data.param1_coef,
    param2_coef: ownProps.data.param2_coef,
    param3_coef: ownProps.data.param3_coef
  }
})

export default compose(
  connect(mapStateToProps),
  reduxForm(),
  withState('isConfirmRemoveParameter', 'setConfirmRemoveParameter', false),
  withHandlers({
    handleConfirmRemoveParameter: ({
      isConfirmRemoveParameter,
      setConfirmRemoveParameter
    }) => () => {
      setConfirmRemoveParameter(!isConfirmRemoveParameter)
    },

    handleRemoveParameter: ({ dispatch }) => id => {
      dispatch(removeParameter(id))
        .then(res => {
          if (res.success) {
            dispatch(fetchMatches())
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
          ...variables
        }

        dispatch(updateParameter(dataReqest))
          .then(res => {
            if (res.success) {
              dispatch(fetchMatches())
            }
          })
          .catch(err => {
            console.log('Error update:', err)
          })
      })
  }),
  pure
)(Parameter)
