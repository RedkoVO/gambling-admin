import compose from 'recompose/compose'
import { withHandlers, withState, pure } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import {
  fetchWithdraws,
  updateWithdraw,
  removeWithdraw
} from '../../../../redux/actions/withdraws'

import Withdraw from '../../../../components/Pages/Withdraws/components/Withdraw'

const FORM_NAME = 'withdraw'

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
  withState('isConfirmRemoveWithdraw', 'setConfirmRemoveWithdraw', false),
  withHandlers({
    handleShowMore: ({ isShowMore, setShowMore }) => () => {
      setShowMore(!isShowMore)
    },

    handleConfirmRemoveWithdraw: ({
      isConfirmRemoveWithdraw,
      setConfirmRemoveWithdraw
    }) => () => {
      setConfirmRemoveWithdraw(!isConfirmRemoveWithdraw)
    },

    handleRemoveWithdraw: ({ dispatch }) => id => {
      dispatch(removeWithdraw(id))
        .then(res => {
          if (res.success) {
            dispatch(fetchWithdraws())
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

        dispatch(updateWithdraw(dataReqest))
          .then(res => {
            if (res.success) {
              dispatch(fetchWithdraws())
            }
          })
          .catch(err => {
            console.log('Error update:', err)
          })
      })
  }),
  pure
)(Withdraw)
