import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withState, withHandlers, lifecycle, pure } from 'recompose'
import { reduxForm } from 'redux-form'

import { fetchDeposits, createDeposit } from '../../../redux/actions/deposits'

import Deposits from '../../../components/Pages/Deposits/Desktop'

const FORM_NAME = 'newDeposit'

const mapStateToProps = state => ({
  depositsData: state.deposits.deposits
})

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: FORM_NAME
  }),
  withState('isAddDeposit', 'setAddDeposit', false),
  withHandlers({
    handleAddDeposit: ({ setAddDeposit, isAddDeposit }) => () => {
      setAddDeposit(!isAddDeposit)
    },

    onSubmit: ({ dispatch, handleSubmit }) =>
      handleSubmit(variables => {
        dispatch(createDeposit(variables))
          .then(res => {
            if (res.success) {
              dispatch(fetchDeposits())
            }
          })
          .catch(err => {
            console.log('Error deposits:', err)
          })
      })
  }),
  lifecycle({
    componentDidMount() {
      const { dispatch } = this.props

      dispatch(fetchDeposits())
    }
  }),
  pure
)(Deposits)
