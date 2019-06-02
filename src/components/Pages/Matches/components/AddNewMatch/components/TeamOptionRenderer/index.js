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
      className={classes.wrSelectItem}
      style={style}
    >
      <img
        className={classes.teamIcon}
        src={`${domain}${option.image}`}
        alt=""
      />
      <label className={classes.labelSelectItem}>{option.title}</label>
    </div>
  )
}

TeamOptionRenderer.propTypes = {
  classes: PropTypes.object,
  domain: PropTypes.string
}

export default TeamOptionRenderer
