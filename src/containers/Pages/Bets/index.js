import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withState, withHandlers, lifecycle, pure } from 'recompose'
import { reduxForm } from 'redux-form'

import { fetchBets, createBet } from '../../../redux/actions/bets'

import Bets from '../../../components/Pages/Bets/Desktop'

const FORM_NAME = 'newBet'

const mapStateToProps = state => ({
  betsData: state.bets.bets
})

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: FORM_NAME
  }),
  withState('isAddBet', 'setAddBet', false),
  withHandlers({
    handleAddBet: ({ setAddBet, isAddBet }) => () => {
      setAddBet(!isAddBet)
    },

    onSubmit: ({ dispatch, handleSubmit }) =>
      handleSubmit(variables => {
        dispatch(createBet(variables))
          .then(res => {
            if (res.success) {
              dispatch(fetchBets())
            }
          })
          .catch(err => {
            console.log('Error bets:', err)
          })
      })
  }),
  lifecycle({
    componentDidMount() {
      const { dispatch } = this.props

      dispatch(fetchBets())
    }
  }),
  pure
)(Bets)
