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

const User = ({
  classes,
  data,
  handleShowMore,
  handleRemoveUser,
  handleConfirmRemoveUser,
  isConfirmRemoveUser,
  isShowMore,
  onSubmit
}) => {
  const formName = `user-${data.id}`

  return (
    <div className={classes.root} key={data.id}>
      <Form className={classes.form} onSubmit={onSubmit}>
        <div className={classes.shortContent}>
          <div className={classes.field}>id: {data.id}</div>
          <div className={cn(classes.field, classes.alowEdit)}>
            name:
            <EditableField
              text={data.username}
              fieldId="username"
              fieldName="username"
              type="text"
              component={InputField}
              placeholder="Name"
              className={classes.fieldEdit}
              formName={formName}
            />
          </div>
          <div className={cn(classes.field, classes.alowEdit)}>
            email:
            <EditableField
              text={data.email}
              fieldId="email"
              fieldName="email"
              type="text"
              component={InputField}
              placeholder="Email"
              className={classes.fieldEdit}
              formName={formName}
            />
          </div>
          <div className={classes.field}>created: {data.created_at}</div>
          <div className={classes.field}>avatar: {data.avatar}</div>
          <div className={classes.wrRightButtons}>
            {isConfirmRemoveUser ? (
              <div className={classes.wrConfirmationRemove}>
                <div onClick={() => handleRemoveUser(data.id)}>DELETE</div>
                <div onClick={() => handleConfirmRemoveUser()}>CANCEL</div>
              </div>
            ) : (
              <img
                src={RemoveIcon}
                className={classes.remove}
                onClick={() => handleConfirmRemoveUser()}
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
              <span>rank id:</span> {data.rank_id}
            </div>
            <div className={classes.moreItem}>
              <span>lvl balance:</span> {data.lvl_balance}
            </div>
            <div className={classes.moreItem}>
              <span>real balance:</span> {data.real_balance}
            </div>
            <div className={classes.moreItem}>
              <span>bet amount:</span> {data.bet_amount}
            </div>
            <div className={classes.moreItem}>
              <span>bet last counter:</span> {data.bet_last_counter}
            </div>
            <div className={classes.moreItem}>
              <span>winstrick:</span> {data.winstrick}
            </div>
            <div className={classes.moreItem}>
              <span>rating participant:</span> {data.rating_participant}
            </div>
            <div className={classes.moreItem}>
              <span>email confirmed:</span> {data.email_confirmed}
            </div>
            <div className={classes.moreItem}>
              <span>verified:</span> {data.verified}
            </div>
          </div>
        )}
      </Form>
    </div>
  )
}

User.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  isShowMore: PropTypes.bool.isRequired,
  isConfirmRemoveUser: PropTypes.bool.isRequired,
  handleShowMore: PropTypes.func.isRequired,
  handleRemoveUser: PropTypes.func.isRequired,
  handleConfirmRemoveUser: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default withStyles(styles)(User)
