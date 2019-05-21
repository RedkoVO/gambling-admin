import React from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'
import { withHandlers, withState, pure } from 'recompose'
import { connect } from 'react-redux'
import { submit } from 'redux-form'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const EditableField = ({
  className,
  classes,
  hendleEdit,
  isEditable,
  handleStartDate,
  text,
  selected,
  dateFormat,
  showTimeInput,
  handleSubmit
}) => (
  <div className={className}>
    {isEditable ? (
      <React.Fragment>
        <DatePicker
          selected={selected}
          onChange={date => handleStartDate(date)}
          dateFormat={dateFormat}
          showTimeInput={showTimeInput}
        />
        <button
          type="submit"
          className={classes.submit}
          onClick={() => handleSubmit()}
        />
      </React.Fragment>
    ) : (
      <span>{moment(text).format('YYYY-MM-DD HH:mm')}</span>
    )}

    <div className={classes.edit} onClick={() => hendleEdit()} />
  </div>
)

EditableField.propTypes = {
  className: PropTypes.string,
  formName: PropTypes.string,
  text: PropTypes.object,
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
)(withStyles(styles)(EditableField))
