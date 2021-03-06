import compose from 'recompose/compose'
import { withHandlers, withState, pure } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import {
  fetchUsers,
  updateUser,
  removeUser
} from '../../../../redux/actions/users'

import User from '../../../../components/Pages/Users/components/User'

const FORM_NAME = 'user'

const mapStateToProps = (state, ownProps) => ({
  form: `${FORM_NAME}-${ownProps.id}`,
  initialValues: {
    email: ownProps.data.email,
    username: ownProps.data.username,
    password: ownProps.data.password
  }
})

export default compose(
  connect(mapStateToProps),
  reduxForm(),
  withState('isShowMore', 'setShowMore', false),
  withState('isConfirmRemoveUser', 'setConfirmRemoveUser', false),
  withHandlers({
    handleShowMore: ({ isShowMore, setShowMore }) => () => {
      setShowMore(!isShowMore)
    },

    handleConfirmRemoveUser: ({
      isConfirmRemoveUser,
      setConfirmRemoveUser
    }) => () => {
      setConfirmRemoveUser(!isConfirmRemoveUser)
    },

    handleRemoveUser: ({ dispatch }) => id => {
      dispatch(removeUser(id))
        .then(res => {
          if (res.success) {
            dispatch(fetchUsers())
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
          username: variables.username,
          email: variables.email,
          password: variables.password
        }

        dispatch(updateUser(dataReqest))
          .then(res => {
            if (res.success) {
              dispatch(fetchUsers())
            }
          })
          .catch(err => {
            console.log('Error update:', err)
          })
      })
  }),
  pure
)(User)
