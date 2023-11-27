import React from 'react'
import Button from '../Button'
import ApplePayIcon from '../../assets/img/ApplePay.svg'
import GorizontalSeparator from '../GorizontalSeparator'

const CardForm = () => {
  return (
    <div className="cardForm">
      <Button
        type="applePay"
        marginBottom={20}
        onClick={() => console.log('SVG button clicked')}
      >
        <img src={ApplePayIcon} alt="Apple Pay" />
      </Button>
      <GorizontalSeparator text="Or pay with card" />
      <div className="formWrapper">Form</div>
      <GorizontalSeparator text="Or alternative methods" />
    </div>
  )
}

export default CardForm
