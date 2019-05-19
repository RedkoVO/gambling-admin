import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withState, withHandlers, lifecycle, pure } from 'recompose'
import { reduxForm } from 'redux-form'

import { fetchTeams, createTeam } from '../../../redux/actions/teams'

import Teams from '../../../components/Pages/Teams/Desktop'

const FORM_NAME = 'newTeam'

const mapStateToProps = state => ({
  teamsData: state.teams.teams
})

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: FORM_NAME
  }),
  withState('isAddTeam', 'setAddTeam', false),
  withHandlers({
    handleAddTeam: ({ setAddTeam, isAddTeam }) => () => {
      setAddTeam(!isAddTeam)
    },

    onSubmit: ({ dispatch, handleSubmit }) =>
      handleSubmit(variables => {
        dispatch(createTeam(variables))
          .then(res => {
            if (res.success) {
              dispatch(fetchTeams())
            }
          })
          .catch(err => {
            console.log('Error teams:', err)
          })
      })
  }),
  lifecycle({
    componentDidMount() {
      const { dispatch } = this.props

      dispatch(fetchTeams())
    }
  }),
  pure
)(Teams)
