import compose from 'recompose/compose'
import { withHandlers, lifecycle, withState, withProps, pure } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import moment from 'moment'

import { fetchMatches, createMatches } from '../../../redux/actions/matches'

import Matches from '../../../components/Pages/Matches/Desktop'

const teams = [
  {
    id: 1,
    name: 'Arsenal'
  },
  {
    id: 2,
    name: 'Ukraine'
  },
  {
    id: 3,
    name: 'Brazil'
  },
  {
    id: 4,
    name: 'France'
  }
]

const FORM_NAME = 'newMatches'

const mapStateToProps = state => ({
  matchesData: state.matches.matches
})

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: FORM_NAME
  }),
  withState('isAddMatch', 'setAddMatch', false),
  withState('startDate', 'setStartDate', new Date()),
  withState('finishDate', 'setFinishDate', new Date()),
  withState('teamValue', 'setTeamValue', ''),
  withHandlers({
    handleAddMatch: ({ setAddMatch, isAddMatch }) => () => {
      setAddMatch(!isAddMatch)
    },

    handleStartDate: ({ setStartDate }) => value => {
      setStartDate(value)
    },

    handleFinishDate: ({ setFinishDate }) => value => {
      setFinishDate(value)
    },

    handleTeamValue: ({ setTeamValue }) => value => {
      setTeamValue(value)
    },

    onSubmit: ({ dispatch, handleSubmit, startDate, finishDate }) =>
      handleSubmit(variables => {
        const data = {
          start_at: moment(startDate).format('YYYY-MM-DD HH:mm'),
          finish_at: moment(finishDate).format('YYYY-MM-DD HH:mm'),
          ...variables
        }

        dispatch(createMatches(data))
          .then(res => {
            if (res.success) {
              dispatch(fetchMatches())
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

      dispatch(fetchMatches())
    }
  }),
  withProps(() => ({
    teams: teams
  })),
  pure
)(Matches)
