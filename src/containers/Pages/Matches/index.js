import compose from 'recompose/compose'
import { withHandlers, withProps, withState, pure } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import Matches from '../../../components/Pages/Matches/Desktop'

const mockData = [
  {
    id: 1,
    team_1_id:         11,
    team_2_id:         12,
    win_id:            50,
    title:             'Manchester - Liverpool',
    description:       'Some text about this match ... Some text about this match ... Some text about this match ... Some text about this match ...',
    start_at:          '2019-06-18 13:55:45.942344',
    finish_at:         '2019-06-18 15:20:45.942344',
    team_1_score:      3,
    team_2_score:      0,
    is_bets_accepting: 1,  //прапорець, який відображає чи приймаються ставки. 1 - приймаються, 0 - ні.
    status:            0,
    params: {
      id:            23,
      match_id:      1,
      title:         'Text about params',
      param1_title:  'Text title 1',
      param1_coef:   1.4,
      param2_title:  'Text title 2',
      param2_coef:   2.1,
      param3_title:  'Text title 3',
      param3_coef:   1.9,
      params_amount: 2,
      is_main:       0,
      win_id:        12
    }
  },
  {
    id: 2,
    team_1_id:         9,
    team_2_id:         37,
    win_id:            40,
    title:             'Ukraine - Brazil',
    description:       'Some text about this match ... Some text about this match ... Some text about this match ... Some text about this match ...',
    start_at:          '2019-06-20 13:55:45.942344',
    finish_at:         '2019-06-20 15:20:45.942344',
    team_1_score:      5,
    team_2_score:      3,
    is_bets_accepting: 0,  //прапорець, який відображає чи приймаються ставки. 1 - приймаються, 0 - ні.
    status:            1,
    params: {
      id:            24,
      match_id:      2,
      title:         'Text about params',
      param1_title:  'Text title 1',
      param1_coef:   1.4,
      param2_title:  'Text title 2',
      param2_coef:   8.1,
      param3_title:  'Text title 3',
      param3_coef:   1.9,
      params_amount: 2,
      is_main:       0,
      win_id:        9
    }
  }
]

const FORM_NAME = 'newMatches'

export default compose(
  connect(),
  reduxForm({
    form: FORM_NAME
  }),
  withState('isAddMatch', 'setAddMatch', false),
  withHandlers({
    handleAddMatch: ({ setAddMatch, isAddMatch }) => () => {
      setAddMatch(!isAddMatch)
    },
    
    onSubmit: ({ handleSubmit }) =>
      handleSubmit(variables => {
        console.log('variables', variables)
      })
  }),
  withProps(() => ({ matchesData: mockData })),
  pure
)(Matches)
