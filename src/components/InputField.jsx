import React from 'react'
import classNames from 'classnames'
import InputMask from 'react-input-mask'
import ViseIcon from '../assets/img/icons/coloredIcons/bx_bxl-visa.svg'
import DiscoverIcon from '../assets/img/icons/coloredIcons/iconfinderIcon.svg'
import MastercardIcon from '../assets/img/icons/coloredIcons/logos_mastercard.svg'
import AECIcon from '../assets/img/icons/coloredIcons/american-express-card.svg'

const InputField = ({
  type,
  value,
  error,
  placeholder,
  icon,
  mask = false,
  onHandleChange,
  handleBlur,
}) => {
  const handleChange = e => {
    onHandleChange(e.target.value)
  }

  const inputMaskProps = {
    value,
    placeholder,
    mask:
      mask === 'card'
        ? '9999 9999 9999 9999'
        : mask === 'expiry'
          ? '99/9999'
          : mask === 'cvv'
            ? '999'
            : '',
    alwaysShowMask: false,
    onChange: handleChange,
    onBlur: e => handleBlur(e.target.value),
  }

  return (
    <>
      <div className={classNames('input-container', { error: Boolean(error) })}>
        {Boolean(error) && (
          <div
            className={classNames('error-text', {
              expiration: type === 'expiryDate',
              cvv: type === 'cvv',
            })}
          >
            {error}
          </div>
        )}
        <InputMask {...inputMaskProps} />
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
            <img
              src={AECIcon}
              alt="AEC icon"
              className="icon-additional__item"
            />
          </div>
        )}
      </div>
    </>
  )
}

export default InputField
