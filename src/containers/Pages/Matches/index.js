import compose from 'recompose/compose'
import { withHandlers, lifecycle, withState, pure } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form'
import moment from 'moment'

import { fetchMatches, createMatches } from '../../../redux/actions/matches'
import { fetchTeams } from '../../../redux/actions/teams'

import Matches from '../../../components/Pages/Matches/Desktop'

const FORM_NAME = 'newMatches'

const mapStateToProps = state => ({
  matchesData: state.matches.matches,
  teamsData: state.teams.teams,
  domain: state.teams.domain
})

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: FORM_NAME
  }),
  withState('isAddMatch', 'setAddMatch', false),
  withState('startDate', 'setStartDate', new Date()),
  withState('finishDate', 'setFinishDate', new Date()),
  withState('team1Value', 'setTeam1Value', null),
  withState('team2Value', 'setTeam2Value', null),
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

    handleTeamValue: ({ setTeam1Value, setTeam2Value }) => (value, team) => {
      if (team === 1) {
        setTeam1Value(value)
      } else {
        setTeam2Value(value)
      }
    },

    onSubmit: ({
      dispatch,
      handleSubmit,
      startDate,
      finishDate,
      team1Value,
      team2Value
    }) =>
      handleSubmit(variables => {
        const data = {
          start_at: moment(startDate).format('YYYY-MM-DD HH:mm'),
          finish_at: moment(finishDate).format('YYYY-MM-DD HH:mm'),
          team_1_id: team1Value,
          team_2_id: team2Value,
          ...variables
        }

        dispatch(createMatches(data))
          .then(res => {
            if (res.success) {
              dispatch(fetchMatches())
              dispatch(reset('newMatches'))
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
      dispatch(fetchTeams())
    }
  }),
  pure
)(Matches)
