import EditIcon from '../../../../../assets/images/edit.png'

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
    flexDirection: 'column',
    minHeight: '60px',

    '& .field': {
      padding: '10px 0'
    }
  },
  wrField: {
    paddingTop: '10px',

    '&:nth-last-of-type(1)': {
      paddingBottom: '10px'
    },

    '& span': {
      fontWeight: 900
    }
  },
  edit: {
    width: '15px',
    height: '15px',
    marginLeft: '10px',
    backgroundImage: `url(${EditIcon})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 0,
    cursor: 'pointer'
  },
  alowEdit: {
    display: 'flex',
    alignItems: 'center'
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
  showMoreIcon: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    width: '20px',
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
  fieldEditDescription: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',

    '& textarea': {
      width: '100%',
      height: '200px',
      fontSize: '14px',
      border: '1px solid #e0e0e0',
      borderRadius: '5px'
    },

    '& span': {
      width: '100%'
    }
  },
  wrParams: {
    padding: '20px 0',
    borderTop: '2px solid #f0eff0'
  },
  paramsTitle: {
    fontSize: '15px',
    textDecoration: 'underline',
    paddingBottom: '15px'
  }
})
