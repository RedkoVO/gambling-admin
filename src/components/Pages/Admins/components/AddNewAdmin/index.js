import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field } from 'redux-form'
import withStyles from '@material-ui/core/styles/withStyles'

import InputField from '../../../../App/Form/InputField'

import styles from './styles'

const AddNewAdmin = ({ classes, onSubmit }) => (
  <Form className={classes.root} onSubmit={onSubmit}>
    <Field
      id="login"
      name="login"
      type="text"
      component={InputField}
      placeholder="login"
      className={classes.field}
    />
    <button type="submit" className={classes.submit} />
  </Form>
)

AddNewAdmin.propTypes = {
  classes: PropTypes.object,
  onSubmit: PropTypes.func
}

export default withStyles(styles)(AddNewAdmin)
