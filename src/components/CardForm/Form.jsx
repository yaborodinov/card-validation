import React, { useState } from 'react'
import InputField from '../InputField'
import EmailIcon from '../../assets/img/icons/singleColorIcons/bytesize_mail.svg'
import CardIcon from '../../assets/img/icons/singleColorIcons/ant-design_credit-card-outlined.svg'
import ExpiryIcon from '../../assets/img/icons/singleColorIcons/ant-design_calendar-outlined.svg'
import CVVIcon from '../../assets/img/icons/singleColorIcons/icons8_lock.svg'
import HolderIcon from '../../assets/img/icons/singleColorIcons/ant-design_user-outlined.svg'
import Button from '../Button'

const required = 'required'

const Form = () => {
  const [emailValue, setEmailValue] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvv, setCvv] = useState('')
  const [holderName, setHolderName] = useState('')
  const [emailError, setEmailError] = useState('')
  const [cardError, setCardError] = useState(false)
  const [expiryError, setExpiryError] = useState(false)
  const [cvvError, setCvvError] = useState(false)
  const [holderError, setHolderError] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    !emailValue && setEmailError(required)
    !cardNumber && setCardError(required)
    !expiry && setExpiryError(required)
    !cvv && setCvvError(required)
    !holderName && setHolderError(required)

    if (
      !emailValue ||
      !cardNumber ||
      !expiry ||
      !cvv ||
      !holderName ||
      emailError ||
      cardError ||
      expiryError ||
      cvvError ||
      holderError
    ) {
      return
    }

    const cardNumberWithoutSpaces = parseInt(cardNumber.replace(/\s/g, ''), 10)

    const formData = {
      email: emailValue,
      cardNumber: cardNumberWithoutSpaces,
      expiry: expiry,
      cvv: cvv,
      holderName: holderName,
    }
    // here we can send data to BE
    console.log('Form Data:', formData)
  }

  const isValidEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const result = emailRegex.test(email)
    if (!result && email) {
      setEmailError('Invalid email address')
    } else if (!result && !email) {
      setEmailError(required)
    }
  }

  const isValidCardNumber = value => {
    const cleanedValue = value.replace(/\D/g, '')
    const result = /^\d{16}$/.test(cleanedValue) ? true : false
    if (!result && value) {
      setCardError('Your card number is invalid')
    } else if (!result && !value) {
      setCardError(required)
    }
  }

  const isValidExpiryDate = input => {
    const regex = /^(0[1-9]|1[0-2])\/(20\d{2})$/
    if (!regex.test(input) && input) {
      setExpiryError("Your card's expiration date is invalid")
      return
    } else if (!regex.test(input) && !input) {
      setExpiryError(required)
      return
    }
    const [, month, year] = input.match(regex)
    const currentYear = new Date().getFullYear()
    const validYear = currentYear + 5

    return (
      parseInt(year, 10) >= currentYear &&
      parseInt(year, 10) <= validYear &&
      parseInt(month, 10) >= 1 &&
      parseInt(month, 10) <= 12
    )
  }

  const isValidCVV = input => {
    const regex = /^\d{3}$/
    if (!regex.test(input) && input) {
      setCvvError('Invalid value')
    } else if (!regex.test(input) && !input) {
      setCvvError(required)
    }
  }

  const isValidName = input => {
    const regex = /^[a-zA-Z]+(\s[a-zA-Z]+)?$/
    if (!regex.test(input) && !input) {
      setHolderError(required)
    }
  }

  const onEmailChange = value => {
    setEmailValue(value)
    setEmailError('')
  }
  const onCardChange = value => {
    setCardNumber(value)
    setCardError(false)
  }
  const onExpirityChange = value => {
    setExpiry(value)
    setExpiryError(false)
  }
  const onCVVChange = value => {
    setCvv(value)
    setCvvError(false)
  }
  const onHolderChange = value => {
    setHolderName(value)
    setHolderError(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputsBlock">
        <div className="inputsBlock-title">Email</div>
        <InputField
          type="email"
          icon={EmailIcon}
          placeholder="examplemail@mail.com"
          value={emailValue}
          error={emailError}
          onHandleChange={value => onEmailChange(value)}
          handleBlur={value => isValidEmail(value)}
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
          error={cardError}
          onHandleChange={value => onCardChange(value)}
          handleBlur={value => isValidCardNumber(value)}
        />
        <div className="inputGroupWrapper">
          <InputField
            type="expiryDate"
            icon={ExpiryIcon}
            mask="expiry"
            placeholder="MM/YYYY"
            error={expiryError}
            onHandleChange={value => onExpirityChange(value)}
            handleBlur={value => isValidExpiryDate(value)}
            value={expiry}
          />
          <InputField
            type="cvv"
            mask="cvv"
            icon={CVVIcon}
            placeholder="CVV"
            value={cvv}
            error={cvvError}
            onHandleChange={value => onCVVChange(value)}
            handleBlur={value => isValidCVV(value)}
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
          error={holderError}
          onHandleChange={value => onHolderChange(value)}
          handleBlur={value => isValidName(value)}
        />
      </div>
      <div className="link">I have a coupon code</div>
      <Button type="primary" children="Submit order" />
    </form>
  )
}

export default Form
