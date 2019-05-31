import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withState, withHandlers, lifecycle, pure } from 'recompose'
import { reduxForm } from 'redux-form'

import { fetchWithdraws, createWithdraw } from '../../../redux/actions/withdraws'

import Withdraws from '../../../components/Pages/Withdraws/Desktop'

const FORM_NAME = 'newWithdraw'

const mapStateToProps = state => ({
  withdrawsData: state.withdraws.withdraws
})

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: FORM_NAME
  }),
  withState('isAddWithdraw', 'setAddWithdraw', false),
  withHandlers({
    handleAddWithdraw: ({ setAddWithdraw, isAddWithdraw }) => () => {
      setAddWithdraw(!isAddWithdraw)
    },

    onSubmit: ({ dispatch, handleSubmit }) =>
      handleSubmit(variables => {
        dispatch(createWithdraw(variables))
          .then(res => {
            if (res.success) {
              dispatch(fetchWithdraws())
            }
          })
          .catch(err => {
            console.log('Error withdraws:', err)
          })
      })
  }),
  lifecycle({
    componentDidMount() {
      const { dispatch } = this.props

      dispatch(fetchWithdraws())
    }
  }),
  pure
)(Withdraws)
