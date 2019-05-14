import compose from 'recompose/compose'
import { withHandlers, withState, pure } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import Match from '../../../../components/Pages/Matches/components/Match'

const FORM_NAME = 'match'

const mapStateToProps = (state, ownProps) => ({
  form: `${FORM_NAME}-${ownProps.id}`,
  initialValues: {
    description: ownProps.data.description,
    paramsTitle: ownProps.data.title,
    paramsTitle1: ownProps.data.param1_title,
    paramsTitle2: ownProps.data.param2_title,
    paramsTitle3: ownProps.data.param3_title
  }
})

export default compose(
  connect(mapStateToProps),
  reduxForm(),
  withState('isShowMore', 'setShowMore', false),
  withHandlers({
    handleShowMore: ({ isShowMore, setShowMore }) => () => {
      setShowMore(!isShowMore)
    },

    onSubmit: ({ handleSubmit }) =>
      handleSubmit(variables => {
        console.log('variables', variables)
      })
  }),
  pure
)(Match)
