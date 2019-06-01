import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
import cn from 'classnames'

import AdminLogo from '../../../assets/images/admin.png'
import UserLogo from '../../../assets/images/users.png'
import MatchLogo from '../../../assets/images/matches.png'
import GameLogo from '../../../assets/images/games.png'
import TeamLogo from '../../../assets/images/teams.png'
import BetLogo from '../../../assets/images/bets.png'
import DepositLogo from '../../../assets/images/deposits.png'
import WithdrawLogo from '../../../assets/images/withdraw.png'

import styles from './styles'

const NavMenu = ({ classes, isShowMenu }) => (
  <nav className={cn(classes.root, { hiddenMenu: !isShowMenu })}>
    <ul className={classes.navList}>
      <li>
        <NavLink
          to={'/'}
          exact
          className={classes.menuItem}
          activeClassName="active"
        >
          <img src={AdminLogo} className={classes.menuIcon} alt="" />
          Admins
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/users'}
          exact
          className={classes.menuItem}
          activeClassName="active"
        >
          <img src={UserLogo} className={classes.menuIcon} alt="" />
          Users
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/matches'}
          exact
          className={classes.menuItem}
          activeClassName="active"
        >
          <img src={MatchLogo} className={classes.menuIcon} alt="" />
          Matches
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/games'}
          exact
          className={classes.menuItem}
          activeClassName="active"
        >
          <img src={GameLogo} className={classes.menuIcon} alt="" />
          Games
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/teams'}
          exact
          className={classes.menuItem}
          activeClassName="active"
        >
          <img src={TeamLogo} className={classes.menuIcon} alt="" />
          Teams
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/bets'}
          exact
          className={classes.menuItem}
          activeClassName="active"
        >
          <img src={BetLogo} className={classes.menuIcon} alt="" />
          Bets
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/deposits'}
          exact
          className={classes.menuItem}
          activeClassName="active"
        >
          <img src={DepositLogo} className={classes.menuIcon} alt="" />
          Deposits
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/withdraws'}
          exact
          className={classes.menuItem}
          activeClassName="active"
        >
          <img src={WithdrawLogo} className={classes.menuIcon} alt="" />
          Withdraws
        </NavLink>
      </li>
    </ul>
  </nav>
)

NavMenu.propTypes = {
  classes: PropTypes.object,
  isShowMenu: PropTypes.bool.isRequired
}

export default withStyles(styles)(NavMenu)
