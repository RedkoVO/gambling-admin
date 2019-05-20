import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field } from 'redux-form'
import withStyles from '@material-ui/core/styles/withStyles'

import InputField from '../../../../../../../../App/Form/InputField'

import styles from './styles'

const AddNewParameter = ({ classes, onSubmit }) => (
  <div className={classes.root}>
    <Form className={classes.form} onSubmit={onSubmit}>
      <Field
        id="param1_coef"
        name="param1_coef"
        type="text"
        component={InputField}
        placeholder="coef 1"
        className={classes.field}
      />
      <Field
        id="param1_title"
        name="param1_title"
        type="text"
        component={InputField}
        placeholder="param title 1"
        className={classes.field}
      />
      <Field
        id="param2_coef"
        name="param2_coef"
        type="text"
        component={InputField}
        placeholder="coef 2"
        className={classes.field}
      />
      <Field
        id="param2_title"
        name="param2_title"
        type="text"
        component={InputField}
        placeholder="param title 2"
        className={classes.field}
      />
      <Field
        id="param3_coef"
        name="param3_coef"
        type="text"
        component={InputField}
        placeholder="coef 3"
        className={classes.field}
      />
      <Field
        id="param3_title"
        name="param3_title"
        type="text"
        component={InputField}
        placeholder="param title 3"
        className={classes.field}
      />
      <Field
        id="title"
        name="title"
        type="text"
        component={InputField}
        placeholder="title"
        className={classes.field}
      />
      <Field
        id="amount"
        name="amount"
        type="text"
        component={InputField}
        placeholder="amount"
        className={classes.field}
      />

      {/** Checkboxes, dates, and selects */}

      <button type="submit" className={classes.submit}>
        Save
      </button>
    </Form>
  </div>
)

AddNewParameter.propTypes = {
  classes: PropTypes.object,
  onSubmit: PropTypes.func
}

export default withStyles(styles)(AddNewParameter)
