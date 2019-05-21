import React from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'
import { withState, withHandlers, lifecycle, pure } from 'recompose'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const LiveSearch = ({ classes, handleSearch, displayedContacts }) => (
  <div className={classes.contacts}>
    <input
      type="text"
      className={classes.searchField}
      onChange={e => handleSearch(e)}
    />
    <ul className={classes.contactsList}>
      {displayedContacts &&
        displayedContacts.map(item => (
          <li className={classes.contact} key={item.id}>
            <div className={classes.contactInfo}>
              <div className={classes.contactName}>{item.name}</div>
            </div>
          </li>
        ))}
    </ul>
  </div>
)

LiveSearch.propTypes = {
  classes: PropTypes.object,
  teams: PropTypes.array,
  handleSearch: PropTypes.func,
  displayedContacts: PropTypes.array
}

export default compose(
  withState('displayedContacts', 'setDisplayedContacts', []),
  withHandlers({
    handleSearch: ({ setDisplayedContacts, teams }) => event => {
      const searchQuery = event.target.value.toLowerCase()
      const displayedContacts = teams.filter(el => {
        const searchValue = el.name.toLowerCase()

        return searchValue.indexOf(searchQuery) !== -1
      })

      setDisplayedContacts(displayedContacts)
    }
  }),
  lifecycle({
    componentDidMount() {
      const { teams, setDisplayedContacts } = this.props
      setDisplayedContacts(teams)
    }
  }),
  pure
)(withStyles(styles)(LiveSearch))
