import React from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'
import { withHandlers, withState, pure } from 'recompose'
import { connect } from 'react-redux'
import { submit } from 'redux-form'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const EditableSelect = ({
  classes,
  hendleEdit,
  isEditable,
  className,
  text,
  fieldId,
  fieldName,
  handleSubmit,
  handleChangeRole,
  roleValue
}) => (
  <div className={className}>
    {isEditable ? (
      <React.Fragment>
        <Select
          id={fieldId}
          name={fieldName}
          className={classes.select}
          value={roleValue}
          onChange={e => handleChangeRole(e.target.value)}
        >
          <MenuItem value={0}>Admin</MenuItem>
          <MenuItem value={1}>Super Admin</MenuItem>
        </Select>
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

EditableSelect.propTypes = {
  className: PropTypes.string,
  formName: PropTypes.string,
  text: PropTypes.number,
  fieldId: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
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
)(withStyles(styles)(EditableSelect))
