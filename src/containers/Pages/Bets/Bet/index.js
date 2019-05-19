import compose from 'recompose/compose'
import { withHandlers, withState, pure } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import {
  fetchBets,
  updateBet,
  removeBet
} from '../../../../redux/actions/bets'

import Bet from '../../../../components/Pages/Bets/components/Bet'

const FORM_NAME = 'bet'

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
  withState('isConfirmRemoveBet', 'setConfirmRemoveBet', false),
  withHandlers({
    handleShowMore: ({ isShowMore, setShowMore }) => () => {
      setShowMore(!isShowMore)
    },

    handleConfirmRemoveBet: ({
      isConfirmRemoveBet,
      setConfirmRemoveBet
    }) => () => {
      setConfirmRemoveBet(!isConfirmRemoveBet)
    },

    handleRemoveBet: ({ dispatch }) => id => {
      dispatch(removeBet(id))
        .then(res => {
          if (res.success) {
            dispatch(fetchBets())
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

        dispatch(updateBet(dataReqest))
          .then(res => {
            if (res.success) {
              dispatch(fetchBets())
            }
          })
          .catch(err => {
            console.log('Error update:', err)
          })
      })
  }),
  pure
)(Bet)
