import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Parameter from '../../../../../../../containers/Pages/Matches/Match/Parameters/Parameter'
import AddNewParameter from './components/AddNewParameter'

import styles from './styles'

const Parameters = ({
  classes,
  data,
  onSubmit,
  handleAddParameter,
  isAddParameter
}) => (
  <div className={classes.root}>
    <div className={classes.headerParameters}>
      <div className={classes.wrButtons}>
        <div
          className={classes.addParameter}
          onClick={() => handleAddParameter()}
        >
          Add parameter
        </div>
      </div>
    </div>

    {isAddParameter && <AddNewParameter onSubmit={onSubmit} />}

    {data.map((item, index) => (
      <Parameter id={item.id} data={item} index={index} key={item.id} />
    ))}
  </div>
)

Parameters.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.array,
  isAddParameter: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  handleAddParameter: PropTypes.func.isRequired
}

export default withStyles(styles)(Parameters)
