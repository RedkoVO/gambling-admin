import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'redux-form'
import cn from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import InputField from '../../../../../../../../App/Form/InputField'
import EditableField from '../../../../../../../../App/Form/EditableField'

import RemoveIcon from '../../../../../../../../../assets/images/remove.png'

import styles from './styles'

const Parameter = ({
  classes,
  data,
  index,
  onSubmit,
  handleRemoveParameter,
  handleConfirmRemoveParameter,
  isConfirmRemoveParameter
}) => {
  const formName = `parameter-${data.id}`

  return (
    <div className={classes.root}>
      <div className={classes.wrRightButtons}>
        {isConfirmRemoveParameter ? (
          <div className={classes.wrConfirmationRemove}>
            <div onClick={() => handleRemoveParameter(data.id)}>DELETE</div>
            <div onClick={() => handleConfirmRemoveParameter()}>CANCEL</div>
          </div>
        ) : (
          <img
            src={RemoveIcon}
            className={classes.remove}
            onClick={() => handleConfirmRemoveParameter()}
            alt="remove"
          />
        )}
      </div>

      <Form className={classes.form} onSubmit={onSubmit}>
        <div className={classes.wrParams}>
          <div className={classes.paramsTitle}>Parameter {index + 1}:</div>
          <div className={classes.moreItem}>
            <span>id:</span>
            {data.id}
          </div>
          <div className={classes.moreItem}>
            <span>match id:</span>
            {data.match_id}
          </div>
          <div className={cn(classes.moreItem, classes.alowEdit)}>
            <span>title:</span>
            <EditableField
              text={data.title}
              fieldId="title"
              fieldName="title"
              type="text"
              component={InputField}
              placeholder="Params title"
              className={classes.fieldEdit}
              formName={formName}
            />
          </div>
          <div className={cn(classes.moreItem, classes.alowEdit)}>
            <span>param 1 title:</span>
            <EditableField
              text={data.param1_title}
              fieldId="param1_title"
              fieldName="param1_title"
              type="text"
              component={InputField}
              placeholder="Params title 1"
              className={classes.fieldEdit}
              formName={formName}
            />
          </div>
          <div className={cn(classes.moreItem, classes.alowEdit)}>
            <span>param 1 coef:</span>
            <EditableField
              text={data.param1_coef}
              fieldId="param1_coef"
              fieldName="param1_coef"
              type="text"
              component={InputField}
              placeholder="coef 1"
              className={classes.fieldEdit}
              formName={formName}
            />
          </div>
          <div className={cn(classes.moreItem, classes.alowEdit)}>
            <span>param 2 title:</span>
            <EditableField
              text={data.param2_title}
              fieldId="param2_title"
              fieldName="param2_title"
              type="text"
              component={InputField}
              placeholder="Params title 2"
              className={classes.fieldEdit}
              formName={formName}
            />
          </div>
          <div className={cn(classes.moreItem, classes.alowEdit)}>
            <span>param 2 coef:</span>
            <EditableField
              text={data.param2_coef}
              fieldId="param2_coef"
              fieldName="param2_coef"
              type="text"
              component={InputField}
              placeholder="coef 2"
              className={classes.fieldEdit}
              formName={formName}
            />
          </div>
          <div className={cn(classes.moreItem, classes.alowEdit)}>
            <span>param 3 title:</span>
            <EditableField
              text={data.param3_title}
              fieldId="param3_title"
              fieldName="param3_title"
              type="text"
              component={InputField}
              placeholder="Params title 3"
              className={classes.fieldEdit}
              formName={formName}
            />
          </div>
          <div className={cn(classes.moreItem, classes.alowEdit)}>
            <span>param 3 coef:</span>
            <EditableField
              text={data.param3_coef}
              fieldId="param3_coef"
              fieldName="param3_coef"
              type="text"
              component={InputField}
              placeholder="coef 3"
              className={classes.fieldEdit}
              formName={formName}
            />
          </div>
          <div className={classes.moreItem}>
            <span>amount:</span>
            {data.params_amount}
          </div>
          <div className={classes.moreItem}>
            <span>is main:</span>
            {data.is_main}
          </div>
          <div className={classes.moreItem}>
            <span>win id:</span>
            {data.win_id}
          </div>
        </div>
      </Form>
    </div>
  )
}

Parameter.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  index: PropTypes.number,
  isConfirmRemoveParameter: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  handleRemoveParameter: PropTypes.func.isRequired,
  handleConfirmRemoveParameter: PropTypes.func.isRequired
}

export default withStyles(styles)(Parameter)
