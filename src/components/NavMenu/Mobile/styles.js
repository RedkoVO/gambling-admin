export default () => ({
  root: {
    position: 'absolute',
    paddingTop: '70px',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#263544',
    transition: 'left 0.2s ease-out',
    zIndex: 1,

    '&.hiddenMenu': {
      left: '-100%'
    }
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,

    '& li': {
      height: '45px',
      margin: 0,
      padding: 0,
      marginTop: '5px',
      cursor: 'pointer'
    }
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingLeft: '15px',
    textDecoration: 'none',
    color: '#fff',
    fontSize: '13px',
    verticalAlign: 'bottom',
    cursor: 'pointer',

    '& svg path': {
      fill: '#fff !important'
    },

    '&:hover svg path': {
      fill: '#fff !important'
    },

    '&:hover, &:active': {
      backgroundColor: '#1d2531'
    },

    '&.active': {
      backgroundColor: '#1d2531'
    }
  },
  menuIcon: {
    display: 'block',
    height: '20px',
    width: '20px',
    marginRight: '15px',
    borderRadius: '5px'
  }
})
