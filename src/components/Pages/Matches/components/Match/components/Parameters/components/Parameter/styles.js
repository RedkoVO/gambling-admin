export default () => ({
  root: {
    position: 'relative'
  },
  wrParams: {
    padding: '20px 0',
    borderTop: '2px solid #f0eff0'
  },
  paramsTitle: {
    fontSize: '15px',
    textDecoration: 'underline',
    paddingBottom: '15px'
  },
  moreItem: {
    paddingBottom: '10px',

    '& span': {
      display: 'inline-block',
      minWidth: '125px'
    }
  },
  fieldEdit: {
    display: 'flex',
    alignItems: 'center',

    '& input': {
      paddingLeft: '5px',
      height: '30px',
      fontSize: '14px',
      borderRadius: '5px',
      border: '1px solid #e0e0e0'
    }
  },
  alowEdit: {
    display: 'flex',
    alignItems: 'center'
  },
  wrRightButtons: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    right: '10px',
    top: '23px'
  },
  remove: {
    width: '20px',
    marginRight: '20px',
    cursor: 'pointer'
  },
  wrConfirmationRemove: {
    marginRight: '20px',

    '& div': {
      marginBottom: '5px',
      cursor: 'pointer',

      '&:first-child': {
        color: 'red'
      },

      '&:hover': {
        textDecoration: 'underline'
      }
    }
  }
})
