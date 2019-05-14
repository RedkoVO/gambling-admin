import compose from 'recompose/compose'
import { withState, withHandlers, pure, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { fetchUsers, createUser } from '../../../redux/actions/users'

import Users from '../../../components/Pages/Users/Desktop'

const FORM_NAME = 'newUser'

const mapStateToProps = state => ({
  usersData: state.users.users
})

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: FORM_NAME
  }),
  withState('isAddUser', 'setAddUser', false),
  withHandlers({
    handleAddUser: ({ setAddUser, isAddUser }) => () => {
      setAddUser(!isAddUser)
    },

    onSubmit: ({ dispatch, handleSubmit }) =>
      handleSubmit(variables => {
        dispatch(createUser(variables))
          .then(res => {
            if (res.success) {
              dispatch(fetchUsers())
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

      dispatch(fetchUsers())
    }
  }),
  pure
)(Users)
