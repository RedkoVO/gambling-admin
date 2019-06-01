import React from 'react'
import PropTypes from 'prop-types'

const TeamOptionRenderer = (domain, classes) => ({
  focusedOption,
  focusedOptionIndex,
  focusOption,
  key,
  labelKey,
  option,
  options,
  selectValue,
  style,
  valueArray,
  valueKey
}) => {
  return (
    <div
      key={key}
      onClick={() => selectValue(option)}
      onMouseEnter={() => focusOption(option)}
      style={style}
    >
      <label>{option.title}</label>
      <img
        className={classes.teamIcon}
        src={`${domain}${option.image}`}
        alt=""
      />
    </div>
  )
}

TeamOptionRenderer.propTypes = {
  classes: PropTypes.object,
  domain: PropTypes.string
}

export default TeamOptionRenderer
