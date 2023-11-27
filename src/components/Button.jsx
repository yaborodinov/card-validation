import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ type, marginBottom, onClick, children }) => {
  const buttonStyle = {
    marginBottom: `${marginBottom}px`,
  }

  return (
    <button style={buttonStyle} className={`button ${type}`} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['applePay', 'primary', 'payPal']).isRequired,
  marginBottom: PropTypes.number,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}

export default Button
