import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field } from 'redux-form'
import withStyles from '@material-ui/core/styles/withStyles'

import InputField from '../../../../App/Form/InputField'
import InputFileUpload from '../../../../App/Form/InputFileUpload'

import styles from './styles'

const AddNewTeam = ({ classes, onSubmit, handleUploadImage }) => (
  <div className={classes.root}>
    <Form className={classes.form} onSubmit={onSubmit}>
      <Field
        id="title"
        name="title"
        type="text"
        component={InputField}
        placeholder="Title"
        className={classes.field}
      />

      <Field
        name="img_url"
        type="file"
        component={InputFileUpload}
        className={classes.file}
        onChange={e => handleUploadImage(e)}
        multiple
        accept=".jpg, .png, .jpeg"
      />

      <button type="submit" className={classes.submit}>
        Save
      </button>
    </Form>
  </div>
)

AddNewTeam.propTypes = {
  classes: PropTypes.object,
  roleValue: PropTypes.number,
  onSubmit: PropTypes.func,
  handleChangeRole: PropTypes.func,
  handleUploadImage: PropTypes.func
}

export default withStyles(styles)(AddNewTeam)
