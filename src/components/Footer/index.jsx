import React from 'react'
import MainInfo from './MainInfo'
import AdditionalInfo from './AdditionalInfo'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <MainInfo />
        <AdditionalInfo />
      </div>
    </div>
  )
}

export default Footer
