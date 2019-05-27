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

const Team = ({
  classes,
  data,
  handleShowMore,
  handleRemoveTeam,
  handleConfirmRemoveTeam,
  isConfirmRemoveTeam,
  isShowMore,
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
            <img src={data.img_url} alt="" />
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

            <img
              src={ShowMoreIcon}
              className={classes.showMoreIcon}
              onClick={() => handleShowMore()}
              alt="show more"
            />
          </div>
        </div>

        {/* {isShowMore && (
          <div className={classes.moreContent}>
            
          </div>
        )} */}
      </Form>
    </div>
  )
}

Team.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  isShowMore: PropTypes.bool.isRequired,
  isConfirmRemoveTeam: PropTypes.bool.isRequired,
  handleShowMore: PropTypes.func.isRequired,
  handleRemoveTeam: PropTypes.func.isRequired,
  handleConfirmRemoveTeam: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default withStyles(styles)(Team)
