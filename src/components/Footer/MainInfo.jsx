import React from 'react'
import Logo from '../../assets/img/Logo.svg'

const MainInfo = () => {
  return (
    <div className="mainInfo">
      <div className="commonInfo">
        <img src={Logo} className="logo" alt="Logo" />
        <div className="commonInfo-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A massa
          scelerisque venenatis orci urna sed lobortis. Vitae cras augue orci
          cum scelerisque maecenas risus arcu. Gravida suscipit amet nullam
          augue vel, non amet pharetra elementum. Leo suspendisse amet
          condimentum eu gravida eu nisl. Iaculis ac turpis nibh mauris mollis
          cras faucibus gravida sit.
        </div>
      </div>
      <div className="aboutUs">
        <div className="aboutUs-title">About Us</div>
        <div className="aboutUs-item">Demo</div>
        <div className="aboutUs-item">Blog</div>
        <div className="aboutUs-item">Features</div>
        <div className="aboutUs-item">FAQ</div>
        <div className="aboutUs-item">Contact Us</div>
      </div>
      <div className="service">
        <div className="service-title">service legal terms</div>
        <div className="service-item">Eula</div>
        <div className="service-item">refund policy</div>
        <div className="service-item">recurring policy</div>
        <div className="service-item">cookie notice</div>
        <div className="service-item">privacy notice</div>
      </div>
      <div className="partners">
        <div className="partners-title">Partners</div>
        <div className="partners-item">affiliate program</div>
        <div className="partners-item">reseller program</div>
      </div>
      <div className="follow">
        <div className="follow-title">Follow us</div>
        <div className="follow-img fb"></div>
        <div className="follow-img inst"></div>
        <div className="follow-img yt"></div>
      </div>
    </div>
  )
}

export default MainInfo
