import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'redux-form'
import cn from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import InputField from '../../../../App/Form/InputField'

import EditableField from '../../../../App/Form/EditableField'

import RemoveIcon from '../../../../../assets/images/remove.png'

import styles from './styles'

const Team = ({
  classes,
  data,
  domain,
  handleRemoveTeam,
  handleConfirmRemoveTeam,
  isConfirmRemoveTeam,
  onSubmit
}) => {
  const formName = `team-${data.id}`

  return (
    <div className={classes.root} key={data.id}>
      <Form className={classes.form} onSubmit={onSubmit}>
        <div className={classes.shortContent}>
          <div className={classes.field}>id: {data.id}</div>
          <div className={cn(classes.field, classes.alowEdit)}>
            title:
            <EditableField
              text={data.title}
              fieldId="title"
              fieldName="title"
              type="text"
              component={InputField}
              placeholder="Title"
              className={classes.fieldEdit}
              formName={formName}
            />
          </div>
          <div className={classes.field}>
            <img src={`${domain}${data.image}`} alt="" />
          </div>
          <div className={classes.wrRightButtons}>
            {isConfirmRemoveTeam ? (
              <div className={classes.wrConfirmationRemove}>
                <div onClick={() => handleRemoveTeam(data.id)}>DELETE</div>
                <div onClick={() => handleConfirmRemoveTeam()}>CANCEL</div>
              </div>
            ) : (
              <img
                src={RemoveIcon}
                className={classes.remove}
                onClick={() => handleConfirmRemoveTeam()}
                alt="remove"
              />
            )}
          </div>
        </div>
      </Form>
    </div>
  )
}

Team.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  isConfirmRemoveTeam: PropTypes.bool.isRequired,
  handleRemoveTeam: PropTypes.func.isRequired,
  handleConfirmRemoveTeam: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default withStyles(styles)(Team)
