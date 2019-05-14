import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withState, withHandlers, lifecycle, pure } from 'recompose'
import { reduxForm } from 'redux-form'

import { fetchAdmins, createAdmin } from '../../../redux/actions/admins'

import Admins from '../../../components/Pages/Admins/Desktop'

const FORM_NAME = 'newAdmin'

const mapStateToProps = state => ({
  adminsData: state.admins.admins
})

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: FORM_NAME
  }),
  withState('isAddAdmin', 'setAddAdmin', false),
  withState('roleValue', 'setRoleValue', 0),
  withHandlers({
    handleAddAdmin: ({ setAddAdmin, isAddAdmin }) => () => {
      setAddAdmin(!isAddAdmin)
    },

    handleChangeRole: ({ setRoleValue }) => value => {
      setRoleValue(value)
    },

    onSubmit: ({ dispatch, handleSubmit }) =>
      handleSubmit(variables => {
        dispatch(createAdmin(variables))
          .then(res => {
            if (res.success) {
              dispatch(fetchAdmins())
            }
          })
          .catch(err => {
            console.log('Error admins:', err)
          })
      })
  }),
  lifecycle({
    componentDidMount() {
      const { dispatch } = this.props

      dispatch(fetchAdmins())
    }
  }),
  pure
)(Admins)
