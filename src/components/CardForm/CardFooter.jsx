import React from 'react'
import Visa from '../../assets/img/icons/coloredIcons/visa.svg'
import MasterCard from '../../assets/img/icons/coloredIcons/masterCard.svg'
import SSL from '../../assets/img/icons/coloredIcons/ssl.svg'
import MacAFREE from '../../assets/img/icons/coloredIcons/macAFREE.svg'
import Norton from '../../assets/img/icons/coloredIcons/norton.svg'

const CardFooter = () => {
  return (
    <div className="cardFooter">
      <div className="reneval">
        <div className="reneval-text">Automatic Renewal:</div>
        <div className="reneval-toggle">On</div>
      </div>
      <div className="content">
        By clicking “submit order” you agree to <span>Terms of service</span> &{' '}
        <span>Recurring Policy</span> as well as to <span>Refund Policy</span> &{' '}
        <span>Legal Disclaimer</span>.
      </div>
      <div className="brands">
        <div>
          <img src={Visa} alt="Visa" />
        </div>
        <div>
          <img src={MasterCard} alt="MasterCard" />
        </div>
        <div>
          <img src={SSL} alt="SSL" />
        </div>
        <div>
          <img src={MacAFREE} alt="MacAFREE" />
        </div>
        <div>
          <img src={Norton} alt="Norton" />
        </div>
      </div>
    </div>
  )
}

export default CardFooter
