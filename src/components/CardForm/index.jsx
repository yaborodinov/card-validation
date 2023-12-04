import React from 'react'
import Button from '../Button'
import ApplePayIcon from '../../assets/img/ApplePay.svg'
import GorizontalSeparator from '../GorizontalSeparator'
import Form from './Form'
import AlternativePayment from '../AlternativePayment'
import CardFooter from './CardFooter'

const CardForm = () => {
  return (
    <div className="cardForm">
      <Button type="applePay" marginBottom={20}>
        <img src={ApplePayIcon} alt="Apple Pay" />
      </Button>
      <GorizontalSeparator text="Or pay with card" />
      <div className="formWrapper">
        <Form />
      </div>
      <GorizontalSeparator text="Or alternative methods" />
      <AlternativePayment />
      <CardFooter />
    </div>
  )
}

export default CardForm
