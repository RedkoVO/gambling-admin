import React from 'react'
import PropTypes from 'prop-types'
import DefaultHeader from '../../../containers/Header'
import DefaultNavMenu from '../../../components/NavMenu/Desktop'

export const PageLayout = ({
  content: Content,
  header: Header,
  navMenu: NavMenu,
  // footer: Footer,
  handleToogleMenu,
  isShowMenu,
  ...rest
}) => {
  return (
    <div className="wrContent">
      <Header
        handleToogleMenu={handleToogleMenu}
        isShowMenu={isShowMenu}
        {...rest}
      />
      <NavMenu isShowMenu={isShowMenu} {...rest} />
      <content>
        <Content isShowMenu={isShowMenu} {...rest} />
      </content>
      {/* <Footer {...rest} /> */}
    </div>
  )
}

PageLayout.propTypes = {
  header: PropTypes.func.isRequired,
  navMenu: PropTypes.func.isRequired,
  content: PropTypes.func.isRequired
  // footer: PropTypes.func.isRequired
}

PageLayout.defaultProps = {
  header: DefaultHeader,
  navMenu: DefaultNavMenu
  // footer: DefaultFooter
}

export default PageLayout
