import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field } from 'redux-form'
import withStyles from '@material-ui/core/styles/withStyles'

import InputField from '../../../../App/Form/InputField'

import styles from './styles'

const AddNewWithdraw = ({ classes, onSubmit }) => (
  <div className={classes.root}>
    <Form className={classes.form} onSubmit={onSubmit}>
      <Field
        id="login"
        name="login"
        type="text"
        component={InputField}
        placeholder="Login"
        className={classes.field}
      />

      <Field
        id="password"
        name="password"
        type="text"
        component={InputField}
        placeholder="Password"
        className={classes.field}
      />

      <button type="submit" className={classes.submit}>
        Save
      </button>
    </Form>
  </div>
)

AddNewWithdraw.propTypes = {
  classes: PropTypes.object,
  roleValue: PropTypes.number,
  onSubmit: PropTypes.func,
  handleChangeRole: PropTypes.func
}

export default withStyles(styles)(AddNewWithdraw)
