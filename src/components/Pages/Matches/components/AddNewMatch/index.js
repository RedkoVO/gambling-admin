import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field } from 'redux-form'
import withStyles from '@material-ui/core/styles/withStyles'

import InputField from '../../../../App/Form/InputField'

import styles from './styles'

// {
//   id: 1,
//   team_1_id:         11,
//   team_2_id:         12,
//   win_id:            50,
//   title:             'Manchester - Liverpool',
//   description:       'Some text about this match ... Some text about this match ... Some text about this match ... Some text about this match ...',
//   start_at:          '2019-06-18 13:55:45.942344',
//   finish_at:         '2019-06-18 15:20:45.942344',
//   team_1_score:      3,
//   team_2_score:      0,
//   is_bets_accepting: 1,  //прапорець, який відображає чи приймаються ставки. 1 - приймаються, 0 - ні.
//   status:            0
// }

// params: {
//   id:            23,
//   match_id:      1,
//   title:         'Text about params',
//   param1_title:  'Text title 1',
//   param1_coef:   1.4,
//   param2_title:  'Text title 2',
//   param2_coef:   2.1,
//   param3_title:  'Text title 3',
//   param3_coef:   1.9,
//   params_amount: 2,
//   is_main:       0,
//   win_id:        12
// }

const AddNewMatch = ({ classes, onSubmit }) => (
  <div className={classes.root}>
    <Form className={classes.form} onSubmit={onSubmit}>
      <Field
        id="team_1_id"
        name="team_1_id"
        type="text"
        component={InputField}
        placeholder="Team 1"
        className={classes.field}
      />
      <Field
        id="team_2_id"
        name="team_2_id"
        type="text"
        component={InputField}
        placeholder="Team 2"
        className={classes.field}
      />
      <Field
        id="description"
        name="description"
        type="text"
        component={InputField}
        placeholder="Description"
        className={classes.field}
      />
      <Field
        id="start_at"
        name="start_at"
        type="text"
        component={InputField}
        placeholder="start_at"
        className={classes.field}
      />
      <Field
        id="finish_at"
        name="finish_at"
        type="text"
        component={InputField}
        placeholder="finish_at"
        className={classes.field}
      />

      {/** Checkboxes, dates, and selects */}

      <button type="submit" className={classes.submit}>
        Save
      </button>
    </Form>
  </div>
)

AddNewMatch.propTypes = {
  classes: PropTypes.object,
  onSubmit: PropTypes.func
}

export default withStyles(styles)(AddNewMatch)
