import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'redux-form'
import withStyles from '@material-ui/core/styles/withStyles'

import ShowMoreIcon from '../../../../../assets/images/show_more.png'
import RemoveIcon from '../../../../../assets/images/remove.png'

import styles from './styles'

const Bet = ({
  classes,
  data,
  handleShowMore,
  handleRemoveBet,
  handleConfirmRemoveBet,
  isConfirmRemoveBet,
  isShowMore,
  onSubmit
}) => {
  // const formName = `bet-${data.id}`

  return (
    <div className={classes.root} key={data.id}>
      <Form className={classes.form} onSubmit={onSubmit}>
        <div className={classes.shortContent}>
          <div className={classes.field}>id: {data.id}</div>
          <div className={classes.field}>user id: {data.user_id}</div>
          <div className={classes.field}>amount: {data.amount}</div>
          <div className={classes.field}>created: {data.created_at}</div>
          <div className={classes.wrRightButtons}>
            {isConfirmRemoveBet ? (
              <div className={classes.wrConfirmationRemove}>
                <div onClick={() => handleRemoveBet(data.id)}>DELETE</div>
                <div onClick={() => handleConfirmRemoveBet()}>CANCEL</div>
              </div>
            ) : (
              <img
                src={RemoveIcon}
                className={classes.remove}
                onClick={() => handleConfirmRemoveBet()}
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
              <span>parameter id:</span> {data.parameter_id}
            </div>
            <div className={classes.moreItem}>
              <span>processed:</span> {data.processed}
            </div>
            <div className={classes.moreItem}>
              <span>win id:</span> {data.win_id}
            </div>
          </div>
        )}
      </Form>
    </div>
  )
}

Bet.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  isShowMore: PropTypes.bool.isRequired,
  isConfirmRemoveBet: PropTypes.bool.isRequired,
  handleShowMore: PropTypes.func.isRequired,
  handleRemoveBet: PropTypes.func.isRequired,
  handleConfirmRemoveBet: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default withStyles(styles)(Bet)
