import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field } from 'redux-form'
import withStyles from '@material-ui/core/styles/withStyles'

import InputField from '../../../../App/Form/InputField'

import styles from './styles'

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
