import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field } from 'redux-form'
import DatePicker from 'react-datepicker'
import SelectSearch from 'react-select-search'
import withStyles from '@material-ui/core/styles/withStyles'

import InputField from '../../../../App/Form/InputField'

import 'react-datepicker/dist/react-datepicker.css'

import styles from './styles'

const AddNewMatch = ({
  classes,
  startDate,
  finishDate,
  handleStartDate,
  handleFinishDate,
  onSubmit,
  handleTeamValue,
  team1Value,
  team2Value,
  teams
}) => (
  <div className={classes.root}>
    <Form className={classes.form} onSubmit={onSubmit}>
      <SelectSearch
        name="team_1_id"
        mode="input"
        value={team1Value}
        options={teams}
        onChange={val => handleTeamValue(val, 1)}
        placeholder="Your team"
      />

      <SelectSearch
        name="team_2_id"
        mode="input"
        value={team2Value}
        options={teams}
        onChange={val => handleTeamValue(val, 2)}
        placeholder="Your team"
      />

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
  handleTeamValue: PropTypes.func,
  team1Value: PropTypes.string,
  team2Value: PropTypes.string,
  teams: PropTypes.array
}

export default withStyles(styles)(AddNewMatch)
