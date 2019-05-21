import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field } from 'redux-form'
import DatePicker from 'react-datepicker'
import withStyles from '@material-ui/core/styles/withStyles'

import InputField from '../../../../App/Form/InputField'
import LiveSearch from '../../../../App/Form/LiveSearch'

import 'react-datepicker/dist/react-datepicker.css'

import styles from './styles'

const AddNewMatch = ({
  classes,
  startDate,
  finishDate,
  handleStartDate,
  handleFinishDate,
  onSubmit,
  teams
}) => (
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

      {/* react-select-search   !!!!!! NEEEED !!!!!!! */}
      {/* <LiveSearch teams={teams} /> */}

      <Field
        id="description"
        name="description"
        type="text"
        component={InputField}
        placeholder="Description"
        className={classes.field}
      />
      <div className={classes.wrDatapicker}>
        <DatePicker
          selected={startDate}
          onChange={date => handleStartDate(date)}
          dateFormat="YYYY-MM-dd HH:mm"
          showTimeInput
        />
        <DatePicker
          selected={finishDate}
          onChange={date => handleFinishDate(date)}
          dateFormat="YYYY-MM-dd HH:mm"
          showTimeInput
        />
      </div>

      <button type="submit" className={classes.submit}>
        Save
      </button>
    </Form>
  </div>
)

AddNewMatch.propTypes = {
  classes: PropTypes.object,
  onSubmit: PropTypes.func,
  startDate: PropTypes.object,
  finishDate: PropTypes.object,
  handleStartDate: PropTypes.func,
  handleFinishDate: PropTypes.func,
  teams: PropTypes.array
}

export default withStyles(styles)(AddNewMatch)
