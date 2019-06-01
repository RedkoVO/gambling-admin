import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field } from 'redux-form'
import DatePicker from 'react-datepicker'
import VirtualizedSelect from 'react-virtualized-select'
import withStyles from '@material-ui/core/styles/withStyles'

import InputField from '../../../../App/Form/InputField'
import TeamOptionRenderer from './components/TeamOptionRenderer'

import styles from './styles'

const AddNewMatch = ({
  classes,
  domain,
  startDate,
  finishDate,
  handleStartDate,
  handleFinishDate,
  onSubmit,
  handleTeamValue,
  team1Value,
  team2Value,
  teamsData
}) => (
  <div className={classes.root}>
    <Form className={classes.form} onSubmit={onSubmit}>
      <VirtualizedSelect
        options={teamsData}
        simpleValue
        clearable
        name="team_1_id"
        value={team1Value}
        onChange={val => handleTeamValue(val, 1)}
        searchable
        labelKey="title"
        valueKey="id"
        className={classes.selectField}
        optionRenderer={TeamOptionRenderer(domain, classes)}
      />

      <VirtualizedSelect
        options={teamsData}
        simpleValue
        clearable
        name="team_2_id"
        value={team2Value}
        onChange={val => handleTeamValue(val, 2)}
        searchable
        labelKey="title"
        valueKey="id"
        className={classes.selectField}
        optionRenderer={TeamOptionRenderer(domain, classes)}
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
  domain: PropTypes.string,
  startDate: PropTypes.object,
  finishDate: PropTypes.object,
  handleStartDate: PropTypes.func,
  handleFinishDate: PropTypes.func,
  handleTeamValue: PropTypes.func,
  team1Value: PropTypes.number,
  team2Value: PropTypes.number,
  teamsData: PropTypes.array
}

export default withStyles(styles)(AddNewMatch)
