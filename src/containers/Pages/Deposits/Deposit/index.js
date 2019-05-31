import compose from 'recompose/compose'
import { withHandlers, withState, pure } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import {
  fetchDeposits,
  updateDeposit,
  removeDeposit
} from '../../../../redux/actions/deposits'

import Deposit from '../../../../components/Pages/Deposits/components/Deposit'

const FORM_NAME = 'deposit'

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
  withState('isConfirmRemoveDeposit', 'setConfirmRemoveDeposit', false),
  withHandlers({
    handleShowMore: ({ isShowMore, setShowMore }) => () => {
      setShowMore(!isShowMore)
    },

    handleConfirmRemoveDeposit: ({
      isConfirmRemoveDeposit,
      setConfirmRemoveDeposit
    }) => () => {
      setConfirmRemoveDeposit(!isConfirmRemoveDeposit)
    },

    handleRemoveDeposit: ({ dispatch }) => id => {
      dispatch(removeDeposit(id))
        .then(res => {
          if (res.success) {
            dispatch(fetchDeposits())
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

        dispatch(updateDeposit(dataReqest))
          .then(res => {
            if (res.success) {
              dispatch(fetchDeposits())
            }
          })
          .catch(err => {
            console.log('Error update:', err)
          })
      })
  }),
  pure
)(Deposit)
