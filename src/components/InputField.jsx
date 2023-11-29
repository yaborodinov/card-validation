import React, { useState } from 'react'
import classNames from 'classnames'
import InputMask from 'react-input-mask'
import ViseIcon from '../assets/img/icons/coloredIcons/bx_bxl-visa.svg'
import DiscoverIcon from '../assets/img/icons/coloredIcons/iconfinderIcon.svg'
import MastercardIcon from '../assets/img/icons/coloredIcons/logos_mastercard.svg'
import AECIcon from '../assets/img/icons/coloredIcons/american-express-card.svg'

const InputField = ({
  type,
  value,
  placeholder,
  icon,
  mask = false,
  onHandleChange,
}) => {
  const [error, setError] = useState(false)
  const handleChange = e => {
    onHandleChange(e.target.value)
  }

  const handleFocutOut = () => {
    type === 'email' && setError(!isValidEmail(value))
    type === 'curdNumber' && setError(isValidCardNumber(value))
    type === 'expiryDate' && setError(!isValidExpiryDate(value))
    type === 'cvv' && setError(!isValidCVV(value))
    type === 'name' && setError(!isValidName(value))
  }

  const isValidEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const isValidCardNumber = value => {
    const cleanedValue = value.replace(/\D/g, '')
    return /^\d{16}$/.test(cleanedValue) ? false : true
  }

  const isValidExpiryDate = input => {
    const regex = /^(0[1-9]|1[0-2])\/(20\d{2})$/
    if (!regex.test(input)) {
      return false
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
    return regex.test(input)
  }

  const isValidName = input => {
    const regex = /^[a-zA-Z]+(\s[a-zA-Z]+)?$/
    return regex.test(input)
  }

  return (
    <div className={classNames('input-container', { error: error })}>
      <InputMask
        value={value}
        placeholder={placeholder}
        mask={
          mask === 'card'
            ? '9999 9999 9999 9999'
            : mask === 'expiry'
              ? '99/9999'
              : mask === 'cvv'
                ? '999'
                : ''
        }
        alwaysShowMask={false}
        onChange={handleChange}
        onBlur={handleFocutOut}
      />
      <img className="icon" src={icon} alt={type} />
      {type === 'curdNumber' && (
        <div className="icon-additional">
          <img
            src={ViseIcon}
            alt="visa icon"
            className="icon-additional__item"
          />
          <img
            src={DiscoverIcon}
            alt="Discover icon"
            className="icon-additional__item"
          />
          <img
            src={MastercardIcon}
            alt="Mastercard icon"
            className="icon-additional__item"
          />
          <img src={AECIcon} alt="AEC icon" className="icon-additional__item" />
        </div>
      )}
    </div>
  )
}

export default InputField
