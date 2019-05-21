import compose from 'recompose/compose'
import { withHandlers, withState, pure } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import moment from 'moment'

import {
  fetchMatches,
  updateMatch,
  removeMatch
} from '../../../../redux/actions/matches'

import Match from '../../../../components/Pages/Matches/components/Match'

const FORM_NAME = 'match'

const mapStateToProps = (state, ownProps) => ({
  form: `${FORM_NAME}-${ownProps.id}`,
  initialValues: {
    description: ownProps.data.description,
    paramsTitle: ownProps.data.title,
    paramsTitle1: ownProps.data.param1_title,
    paramsTitle2: ownProps.data.param2_title,
    paramsTitle3: ownProps.data.param3_title
  }
})

export default compose(
  connect(mapStateToProps),
  reduxForm(),
  withState('isShowMore', 'setShowMore', false),
  withState('isConfirmRemoveMatch', 'setConfirmRemoveMatch', false),
  withState('startDate', 'setStartDate', new Date()),
  withState('finishDate', 'setFinishDate', new Date()),
  withHandlers({
    handleShowMore: ({ isShowMore, setShowMore }) => () => {
      setShowMore(!isShowMore)
    },

    handleConfirmRemoveMatch: ({
      isConfirmRemoveMatch,
      setConfirmRemoveMatch
    }) => () => {
      setConfirmRemoveMatch(!isConfirmRemoveMatch)
    },

    handleRemoveMatch: ({ dispatch }) => id => {
      dispatch(removeMatch(id))
        .then(res => {
          if (res.success) {
            dispatch(fetchMatches())
          }
        })
        .catch(err => {
          console.log('Error delete:', err)
        })
    },

    handleStartDate: ({ setStartDate }) => value => {
      setStartDate(value)
    },

    handleFinishDate: ({ setFinishDate }) => value => {
      setFinishDate(value)
    },

    onSubmit: ({ dispatch, handleSubmit, startDate, finishDate, data }) =>
      handleSubmit(variables => {
        const dataReqest = {
          id: data.id,
          description: variables.description,
          start_at: moment(startDate).format('YYYY-MM-DD HH:mm'),
          finish_at: moment(finishDate).format('YYYY-MM-DD HH:mm')
        }

        dispatch(updateMatch(dataReqest))
          .then(res => {
            if (res.success) {
              dispatch(fetchMatches())
            }
          })
          .catch(err => {
            console.log('Error update:', err)
          })
      })
  }),
  pure
)(Match)
