export default () => ({
  button: {
    padding: '10px 25px',
    width: 'fit-content',
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow:
      '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
    backgroundColor: '#e0e0e0',
    cursor: 'pointer',
    transition: 'background-color 250ms',

    '&:hover': {
      backgroundColor: '#d5d5d5'
    },
    '&:active': {
      boxShadow:
        '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)'
    }
  },
  hidden: {
    display: 'none'
  }
})
