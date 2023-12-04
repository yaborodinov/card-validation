import React from 'react'
import SafeIcon from '../../assets/img/icons/coloredIcons/safe.svg'
import SSCIcon from '../../assets/img/icons/coloredIcons/ssc.svg'
import PCIIcon from '../../assets/img/icons/coloredIcons/PCI.svg'

const AdditionalInfo = () => {
  return (
    <div className="additionalInfo">
      <div className="additionalInfo-row">
        <div className="additionalInfo-row__item language">English</div>
        <div className="additionalInfo-row__item servTerm">
          Terms of service
        </div>
        <div className="additionalInfo-row__item servPay">
          Secure internet payments
        </div>
      </div>
      <div className="additionalInfo-row copyright">
        <div className="additionalInfo-row__item copyright-text">
          © 2020 LOGO | All Rights Reserved.
        </div>
        <div className="additionalInfo-row__item imgBlock">
          <div className="imgWrapper">
            <img src={SafeIcon} alt="safe" />
          </div>
          <div className="imgWrapper">
            <img src={SSCIcon} alt="SSC" />
          </div>
          <div className="imgWrapper">
            <img src={PCIIcon} alt="PCI" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdditionalInfo
