import React from 'react'
import SidebarLeftLogo from '../assets/img/SidebarLeftLogo.svg'
import Feature from './Feature'

// images
import PhoneImg from '../assets/img/icons/singleColorIcons/calls.svg'
import EmailImg from '../assets/img/icons/singleColorIcons/email.svg'

const SidebarLeft = () => {
  return (
    <div className="sidebarLeft">
      <div className="content">
        <img className="content-logo" src={SidebarLeftLogo} alt="Logo" />
        <h3 className="content-title">You get all these features:</h3>
        <div className="features">
          <Feature title={'Feature 1'} titleImg={PhoneImg} />
          <Feature title={'Feature 2'} titleImg={EmailImg} />
          ...
        </div>
      </div>
    </div>
  )
}

export default SidebarLeft
