import React from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'
import { withHandlers, withState, pure } from 'recompose'
import { connect } from 'react-redux'
import { Field, submit } from 'redux-form'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const EditableTextField = ({
  classes,
  hendleEdit,
  isEditable,
  className,
  inputStyle,
  text,
  fieldId,
  fieldName,
  component,
  placeholder,
  handleSubmit
}) => (
  <div className={className}>
    {isEditable ? (
      <React.Fragment>
        <Field
          id={fieldId}
          name={fieldName}
          component={component}
          placeholder={placeholder}
          className={inputStyle}
        />
        <button
          type="submit"
          className={classes.submit}
          onClick={() => handleSubmit()}
        />
      </React.Fragment>
    ) : (
      <span>{text}</span>
    )}

    <div className={classes.edit} onClick={() => hendleEdit()} />
  </div>
)

EditableTextField.propTypes = {
  className: PropTypes.string,
  formName: PropTypes.string,
  inputStyle: PropTypes.string,
  text: PropTypes.string,
  fieldId: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  component: PropTypes.func,
  isEditable: PropTypes.bool.isRequired,
  hendleEdit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default compose(
  connect(),
  withState('isEditable', 'setEditable', false),
  withHandlers({
    hendleEdit: ({ isEditable, setEditable }) => () => {
      setEditable(!isEditable)
    },
    handleSubmit: ({ dispatch, formName, isEditable, setEditable }) => () => {
      dispatch(submit(formName))
      setEditable(!isEditable)
    }
  }),
  pure
)(withStyles(styles)(EditableTextField))
