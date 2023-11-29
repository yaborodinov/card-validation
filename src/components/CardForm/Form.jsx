import React, { useState } from 'react'
import InputField from '../InputField'
import EmailIcon from '../../assets/img/icons/singleColorIcons/bytesize_mail.svg'
import CardIcon from '../../assets/img/icons/singleColorIcons/ant-design_credit-card-outlined.svg'
import ExpiryIcon from '../../assets/img/icons/singleColorIcons/ant-design_calendar-outlined.svg'
import CVVIcon from '../../assets/img/icons/singleColorIcons/icons8_lock.svg'
import HolderIcon from '../../assets/img/icons/singleColorIcons/ant-design_user-outlined.svg'
import Button from '../Button'

const Form = () => {
  const [emailValue, setEmailValue] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvv, setCvv] = useState('')
  const [holderName, setHolderName] = useState('')

  return (
    <form>
      <div className="inputsBlock">
        <div className="inputsBlock-title">Email</div>
        <InputField
          type="email"
          icon={EmailIcon}
          placeholder="examplemail@mail.com"
          value={emailValue}
          onHandleChange={setEmailValue}
        />
      </div>
      <div className="inputsBlock">
        <div className="inputsBlock-title">Card information</div>
        <InputField
          type="curdNumber"
          icon={CardIcon}
          mask="card"
          placeholder="0000 0000 0000 0000"
          value={cardNumber}
          onHandleChange={setCardNumber}
        />
        <div className="inputGroupWrapper">
          <InputField
            type="expiryDate"
            icon={ExpiryIcon}
            mask="expiry"
            placeholder="MM/YYYY"
            value={expiry}
            onHandleChange={setExpiry}
          />
          <InputField
            type="cvv"
            mask="cvv"
            icon={CVVIcon}
            placeholder="CVV"
            value={cvv}
            onHandleChange={setCvv}
          />
        </div>
      </div>
      <div className="inputsBlock">
        <div className="inputsBlock-title">Name on card</div>
        <InputField
          type="name"
          icon={HolderIcon}
          placeholder="Enter cardholder name"
          value={holderName}
          onHandleChange={setHolderName}
        />
      </div>
      <div className="link">I have a coupon code</div>
      <Button type="primary" children="Submit order" />
    </form>
  )
}

export default Form
