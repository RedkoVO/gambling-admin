import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'redux-form'
import cn from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import TextField from '../../../../App/Form/TextField'
import EditableDatepicker from '../../../../App/Form/EditableDatepicker'
import EditableTextField from '../../../../App/Form/EditableTextField'
import Parameters from '../../../../../containers/Pages/Matches/Match/Parameters'

import ShowMoreIcon from '../../../../../assets/images/show_more.png'
import RemoveIcon from '../../../../../assets/images/remove.png'

import styles from './styles'

const Match = ({
  classes,
  data,
  handleShowMore,
  handleRemoveMatch,
  handleConfirmRemoveMatch,
  isConfirmRemoveMatch,
  isShowMore,
  startDate,
  finishDate,
  handleStartDate,
  handleFinishDate,
  onSubmit
}) => {
  const formName = `match-${data.id}`

  return (
    <div className={classes.root} key={data.id}>
      <Form className={classes.form} onSubmit={onSubmit}>
        <div className={classes.shortContent}>
          <div className={classes.field}>id: {data.id}</div>
          <div className={classes.field}>
            title: <span>{data.title}</span>
          </div>
          <div className={classes.field}>1 team id: {data.team_1_id}</div>
          <div className={classes.field}>2 team id: {data.team_2_id}</div>

          <div className={classes.wrRightButtons}>
            {isConfirmRemoveMatch ? (
              <div className={classes.wrConfirmationRemove}>
                <div onClick={() => handleRemoveMatch(data.id)}>DELETE</div>
                <div onClick={() => handleConfirmRemoveMatch()}>CANCEL</div>
              </div>
            ) : (
              <img
                src={RemoveIcon}
                className={classes.remove}
                onClick={() => handleConfirmRemoveMatch()}
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
              <span>win id:</span>
              {data.win_id}
            </div>

            <div className={cn(classes.moreItem, classes.alowEdit)}>
              <span>description:</span>
              <EditableTextField
                text={data.description}
                fieldId="description"
                fieldName="description"
                component={TextField}
                placeholder="Description"
                className={classes.fieldEditDescription}
                formName={formName}
              />
            </div>

            <div className={cn(classes.moreItem, classes.alowEdit)}>
              <span>Start:</span>
              <EditableDatepicker
                className={classes.fieldEdit}
                text={startDate}
                selected={startDate}
                handleStartDate={handleStartDate}
                dateFormat="YYYY-MM-dd HH:mm"
                showTimeInput
                formName={formName}
              />
            </div>
            <div className={cn(classes.moreItem, classes.alowEdit)}>
              <span>Finish:</span>
              <EditableDatepicker
                className={classes.fieldEdit}
                text={finishDate}
                selected={startDate}
                handleStartDate={handleFinishDate}
                dateFormat="YYYY-MM-dd HH:mm"
                showTimeInput
                formName={formName}
              />
            </div>
            <div className={classes.moreItem}>
              <span>1 team score:</span>
              {data.team_1_score}
            </div>
            <div className={classes.moreItem}>
              <span>2 team score:</span>
              {data.team_2_score}
            </div>
            <div className={classes.moreItem}>
              <span>bets accepting:</span>
              {data.is_bets_accepting}
            </div>
            <div className={classes.moreItem}>
              <span>status:</span>
              {data.status}
            </div>
          </div>
        )}
      </Form>

      {isShowMore && <Parameters data={data.parameters} matchId={data.id} />}
    </div>
  )
}

Match.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  handleShowMore: PropTypes.func.isRequired,
  isShowMore: PropTypes.bool.isRequired,
  isConfirmRemoveMatch: PropTypes.bool.isRequired,
  handleRemoveMatch: PropTypes.func.isRequired,
  handleConfirmRemoveMatch: PropTypes.func.isRequired,
  startDate: PropTypes.object,
  finishDate: PropTypes.object,
  handleStartDate: PropTypes.func,
  handleFinishDate: PropTypes.func,
  onSubmit: PropTypes.func.isRequired
}

export default withStyles(styles)(Match)
