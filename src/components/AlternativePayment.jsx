import React, { useState } from 'react'
import Paypal from '../assets/img/paypal.svg'
import PaypalTransparrent from '../assets/img/icons/singleColorIcons/paypal-transparrent.svg'
import BTC from '../assets/img/btc.svg'
import BTCTransparrent from '../assets/img/icons/singleColorIcons/btc-transparrent.svg'
import Button from './Button'
import classNames from 'classnames'

const AlternativePayment = () => {
  const [showButtons, setShowButtons] = useState(true)

  const onAlternativePayment = () => {
    setShowButtons(!showButtons)
  }
  return (
    <div className="alternative">
      <div
        className={classNames('alternative-header', { open: showButtons })}
        onClick={onAlternativePayment}
      >
        <img
          src={showButtons ? PaypalTransparrent : Paypal}
          alt="paypal"
          className="alternative-img"
        />
        <img
          src={showButtons ? BTCTransparrent : BTC}
          alt="BTC"
          className="alternative-img"
        />
      </div>
      {showButtons && (
        <div className="alternative-list">
          <Button type="payPal" marginBottom={8}>
            <img src={Paypal} alt="paypal" />
          </Button>
          <Button type="payPal">
            <img src={BTC} alt="paypal" />
          </Button>
        </div>
      )}
    </div>
  )
}

export default AlternativePayment
