import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'redux-form'
import cn from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import TextField from '../../../../App/Form/TextField'

// import InputField from '../../../../App/Form/InputField'
// import EditableField from '../../../../App/Form/EditableField'
import EditableTextField from '../../../../App/Form/EditableTextField'

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

            <div className={classes.moreItem}>
              <span>start:</span>
              {data.start_at}
            </div>
            <div className={classes.moreItem}>
              <span>finish:</span>
              {data.finish_at}
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

            {/* <div className={classes.wrParams}>
            <div className={classes.paramsTitle}>Params:</div>
            <div className={classes.moreItem}>
              <span>id:</span>
              {data.params.id}
            </div>
            <div className={classes.moreItem}>
              <span>match id:</span>
              {data.params.match_id}
            </div>
            <div className={cn(classes.moreItem, classes.alowEdit)}>
              <span>title:</span>
              <EditableField
                text={data.params.title}
                fieldId="paramsTitle"
                fieldName="paramsTitle"
                type="text"
                component={InputField}
                placeholder="Params title"
                className={classes.fieldEdit}
                formName={`match-${data.id}`}
              />
            </div>
            <div className={cn(classes.moreItem, classes.alowEdit)}>
              <span>param 1 title:</span>
              <EditableField
                text={data.params.param1_title}
                fieldId="paramsTitle1"
                fieldName="paramsTitle1"
                type="text"
                component={InputField}
                placeholder="Params title 1"
                className={classes.fieldEdit}
                formName={`match-${data.id}`}
              />
            </div>
            <div className={classes.moreItem}>
              <span>param 1 coef:</span>
              {data.params.param1_coef}
            </div>
            <div className={cn(classes.moreItem, classes.alowEdit)}>
              <span>param 2 title:</span>
              <EditableField
                text={data.params.param2_title}
                fieldId="paramsTitle2"
                fieldName="paramsTitle2"
                type="text"
                component={InputField}
                placeholder="Params title 2"
                className={classes.fieldEdit}
                formName={`match-${data.id}`}
              />
            </div>
            <div className={classes.moreItem}>
              <span>param 2 coef:</span>
              {data.params.param2_coef}
            </div>
            <div className={cn(classes.moreItem, classes.alowEdit)}>
              <span>param 3 title:</span>
              <EditableField
                text={data.params.param3_title}
                fieldId="paramsTitle3"
                fieldName="paramsTitle3"
                type="text"
                component={InputField}
                placeholder="Params title 3"
                className={classes.fieldEdit}
                formName={`match-${data.id}`}
              />
            </div>
            <div className={classes.moreItem}>
              <span>param 3 coef:</span>
              {data.params.param3_coef}
            </div>
            <div className={classes.moreItem}>
              <span>amount:</span>
              {data.params.params_amount}
            </div>
            <div className={classes.moreItem}>
              <span>is main:</span>
              {data.params.is_main}
            </div>
            <div className={classes.moreItem}>
              <span>win id:</span>
              {data.params.win_id}
            </div>
          </div> */}
          </div>
        )}
      </Form>
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
  onSubmit: PropTypes.func.isRequired
}

export default withStyles(styles)(Match)
