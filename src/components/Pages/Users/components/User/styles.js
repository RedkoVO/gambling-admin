export default () => ({
  root: {
    position: 'relative',
    padding: '0 10px',
    marginBottom: '15px',
    minHeight: '60px',
    borderRadius: '5px',
    boxShadow: '0 0 5px 0 rgba(43,43,43,.1), 0 11px 6px -7px rgba(43,43,43,.1)',
    border: 'none',
    backgroundColor: '#fff'
  },
  shortContent: {
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    minHeight: '60px'
  },
  field: {
    padding: '10px 0'
  },
  alowEdit: {
    display: 'flex',
    alignItems: 'center'
  },
  fieldEdit: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '5px',

    '& input': {
      paddingLeft: '5px',
      height: '30px',
      fontSize: '14px',
      borderRadius: '5px',
      border: '1px solid #e0e0e0'
    }
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
  showMoreIcon: {
    width: '20px',
    right: '50px',
    cursor: 'pointer'
  },
  moreContent: {
    padding: '20px 0',
    borderTop: '2px solid #f0eff0'
  },
  moreItem: {
    paddingBottom: '10px',

    '& span': {
      display: 'inline-block',
      minWidth: '125px'
    }
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
