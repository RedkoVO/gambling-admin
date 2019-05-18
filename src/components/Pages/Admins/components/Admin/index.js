import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'redux-form'
import cn from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import InputField from '../../../../App/Form/InputField'

import EditableField from '../../../../App/Form/EditableField'

import ShowMoreIcon from '../../../../../assets/images/show_more.png'
import RemoveIcon from '../../../../../assets/images/remove.png'

import styles from './styles'

const Admin = ({
  classes,
  data,
  handleShowMore,
  handleRemoveAdmin,
  handleConfirmRemoveAdmin,
  isConfirmRemoveAdmin,
  isShowMore,
  onSubmit
}) => {
  const formName = `admin-${data.id}`

  return (
    <div className={classes.root} key={data.id}>
      <Form className={classes.form} onSubmit={onSubmit}>
        <div className={classes.shortContent}>
          <div className={classes.field}>id: {data.id}</div>
          <div className={classes.field}>role: {data.role}</div>
          <div className={cn(classes.field, classes.alowEdit)}>
            login:
            <EditableField
              text={data.login}
              fieldId="login"
              fieldName="login"
              type="text"
              component={InputField}
              placeholder="Login"
              className={classes.fieldEdit}
              formName={formName}
            />
          </div>
          <div className={classes.field}>created: {data.created_at}</div>
          <div className={classes.wrRightButtons}>
            {isConfirmRemoveAdmin ? (
              <div className={classes.wrConfirmationRemove}>
                <div onClick={() => handleRemoveAdmin(data.id)}>DELETE</div>
                <div onClick={() => handleConfirmRemoveAdmin()}>CANCEL</div>
              </div>
            ) : (
              <img
                src={RemoveIcon}
                className={classes.remove}
                onClick={() => handleConfirmRemoveAdmin()}
                alt="remove"
              />
            )}

            <img
              src={ShowMoreIcon}
              className={classes.showMoreIcon}
              onClick={() => handleShowMore()}
              alt="show more"
            />
          </div>
        </div>

        {isShowMore && (
          <div className={classes.moreContent}>
            <div className={cn(classes.moreItem, classes.alowEdit)}>
              <span>password:</span>
              <EditableField
                text={data.password}
                fieldId="password"
                fieldName="password"
                type="text"
                component={InputField}
                placeholder="Password"
                className={classes.fieldEdit}
                formName={formName}
              />
            </div>
            <div className={classes.moreItem}>
              <span>token:</span> {data.auth_token}
            </div>
            <div className={classes.moreItem}>
              <span>valid until:</span> {data.valid_until}
            </div>
            <div className={classes.moreItem}>
              <span>failed attempts:</span> {data.failed_attempts}
            </div>
          </div>
        )}
      </Form>
    </div>
  )
}

Admin.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  isShowMore: PropTypes.bool.isRequired,
  isConfirmRemoveAdmin: PropTypes.bool.isRequired,
  handleShowMore: PropTypes.func.isRequired,
  handleRemoveAdmin: PropTypes.func.isRequired,
  handleConfirmRemoveAdmin: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default withStyles(styles)(Admin)
