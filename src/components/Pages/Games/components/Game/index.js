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

const Game = ({
  classes,
  data,
  handleShowMore,
  handleRemoveGame,
  handleConfirmRemoveGame,
  isConfirmRemoveGame,
  isShowMore,
  onSubmit
}) => {
  const formName = `game-${data.id}`

  return (
    <div className={classes.root} key={data.id}>
      <Form className={classes.form} onSubmit={onSubmit}>
        <div className={classes.shortContent}>
          <div className={classes.field}>id: {data.id}</div>

          <div className={classes.field}>
            <img src={data.img_url} alt="" />
          </div>

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
          <div className={classes.field}>is available: {data.is_available}</div>
          <div className={classes.wrRightButtons}>
            {isConfirmRemoveGame ? (
              <div className={classes.wrConfirmationRemove}>
                <div onClick={() => handleRemoveGame(data.id)}>DELETE</div>
                <div onClick={() => handleConfirmRemoveGame()}>CANCEL</div>
              </div>
            ) : (
              <img
                src={RemoveIcon}
                className={classes.remove}
                onClick={() => handleConfirmRemoveGame()}
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
              <span>code:</span>
              <EditableField
                text={data.code}
                fieldId="code"
                fieldName="code"
                type="text"
                component={InputField}
                placeholder="Code"
                className={classes.fieldEdit}
                formName={formName}
              />
            </div>
            <div className={classes.moreItem}>
              <span>priority:</span> {data.priority}
            </div>
          </div>
        )}
      </Form>
    </div>
  )
}

Game.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  isShowMore: PropTypes.bool.isRequired,
  isConfirmRemoveGame: PropTypes.bool.isRequired,
  handleShowMore: PropTypes.func.isRequired,
  handleRemoveGame: PropTypes.func.isRequired,
  handleConfirmRemoveGame: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default withStyles(styles)(Game)
