import compose from 'recompose/compose'
import { withHandlers, withState, pure } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import {
  fetchAdmins,
  updateAdmin,
  removeAdmin
} from '../../../../redux/actions/admins'

import Admin from '../../../../components/Pages/Admins/components/Admin'

const FORM_NAME = 'admin'

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
  withState('isConfirmRemoveAdmin', 'setConfirmRemoveAdmin', false),
  withHandlers({
    handleShowMore: ({ isShowMore, setShowMore }) => () => {
      setShowMore(!isShowMore)
    },

    handleConfirmRemoveAdmin: ({
      isConfirmRemoveAdmin,
      setConfirmRemoveAdmin
    }) => () => {
      setConfirmRemoveAdmin(!isConfirmRemoveAdmin)
    },

    handleRemoveAdmin: ({ dispatch }) => id => {
      dispatch(removeAdmin(id))
        .then(res => {
          if (res.success) {
            dispatch(fetchAdmins())
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

        dispatch(updateAdmin(dataReqest))
          .then(res => {
            if (res.success) {
              dispatch(fetchAdmins())
            }
          })
          .catch(err => {
            console.log('Error update:', err)
          })
      })
  }),
  pure
)(Admin)
