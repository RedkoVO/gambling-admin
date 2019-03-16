export default () => ({
  root: {
    width: '100%',
    marginLeft: '250px',
    transition: 'margin-left 0.2s ease-out',

    '&.hiddenMenu': {
      marginLeft: '0'
    }
  }
})