import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'redux-form'
import withStyles from '@material-ui/core/styles/withStyles'

import ShowMoreIcon from '../../../../../assets/images/show_more.png'
import RemoveIcon from '../../../../../assets/images/remove.png'

import styles from './styles'

const Withdraw = ({
  classes,
  data,
  handleShowMore,
  handleRemoveWithdraw,
  handleConfirmRemoveWithdraw,
  isConfirmRemoveWithdraw,
  isShowMore,
  onSubmit
}) => {
  // const formName = `withdraw-${data.id}`

  return (
    <div className={classes.root} key={data.id}>
      <Form className={classes.form} onSubmit={onSubmit}>
        <div className={classes.shortContent}>
          <div className={classes.field}>id: {data.id}</div>
          <div className={classes.field}>user id: {data.user_id}</div>
          <div className={classes.field}>amount: {data.amount} {data.currency}</div>
          <div className={classes.field}>created: {data.created_at}</div>
          <div className={classes.wrRightButtons}>
            {isConfirmRemoveWithdraw ? (
              <div className={classes.wrConfirmationRemove}>
                <div onClick={() => handleRemoveWithdraw(data.id)}>DELETE</div>
                <div onClick={() => handleConfirmRemoveWithdraw()}>CANCEL</div>
              </div>
            ) : (
              <img
                src={RemoveIcon}
                className={classes.remove}
                onClick={() => handleConfirmRemoveWithdraw()}
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
            <div className={classes.moreItem}>
              <span>processed:</span> {data.processed}
            </div>
          </div>
        )}
      </Form>
    </div>
  )
}

Withdraw.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  isShowMore: PropTypes.bool.isRequired,
  isConfirmRemoveWithdraw: PropTypes.bool.isRequired,
  handleShowMore: PropTypes.func.isRequired,
  handleRemoveWithdraw: PropTypes.func.isRequired,
  handleConfirmRemoveWithdraw: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default withStyles(styles)(Withdraw)
