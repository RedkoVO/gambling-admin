import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const InputFileUpload = ({
  classes,
  className,
  input: { value: omitValue, onChange, onBlur, ...inputProps },
  meta: omitMeta,
  ...props
}) => (
  <React.Fragment>
    <input
      id="contained-button-file"
      type="file"
      {...props.input}
      {...props}
      onChange={onChange}
      className={classes.hidden}
    />
    <label htmlFor="contained-button-file">
      <div className={cn(classes.button, className)}>Upload</div>
    </label>
  </React.Fragment>
)

InputFileUpload.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string
}

export default withStyles(styles)(InputFileUpload)
