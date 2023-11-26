import React from 'react'
import Logo from '../assets/img/Logo.svg'
import Menu from './Menu'

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-inner">
          <img src={Logo} className="logo" alt="Logo" />
          <Menu />
        </div>
      </div>
    </div>
  )
}

export default Header
