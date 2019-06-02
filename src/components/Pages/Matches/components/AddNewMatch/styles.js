export default () => ({
  root: {
    border: 'none',
    padding: '20px',
    position: 'relative',
    boxShadow: '0 0 5px 0 rgba(43,43,43,.1), 0 11px 6px -7px rgba(43,43,43,.1)',
    marginBottom: '15px',
    borderRadius: '5px',
    backgroundColor: '#fff'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px'
  },
  field: {
    padding: '8px 10px',
    marginBottom: '20px',
    width: '300px',
    fontSize: '14px',
    borderRadius: '2px',
    color: '#495057',
    backgroundColor: '#fff',
    border: '1px solid #ccc'
  },
  selectField: {
    marginBottom: '20px'
  },
  submit: {
    width: '150px',
    margin: '0 auto',
    color: '#fff',
    cursor: 'pointer',
    padding: '10px 20px',
    borderRadius: '20px',
    fontSize: '14px',
    backgroundColor: '#2ed8b6'
  },
  wrDatapicker: {
    '& .react-datepicker-wrapper input': {
      padding: '8px 10px',
      marginBottom: '20px',
      width: '300px',
      fontSize: '14px',
      borderRadius: '2px',
      color: '#495057',
      backgroundColor: '#fff',
      border: '1px solid #ccc'
    }
  },
  wrSelectItem: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'background 0.1s ease-out',

    '&:hover': {
      background: '#eaeaea'
    }
  },
  labelSelectItem: {
    paddingLeft: '20px',
    fontSize: '15px'
  },
  teamIcon: {
    width: '25px',
    height: '25px',
    marginLeft: '10px'
  }
})
