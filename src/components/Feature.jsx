import React from 'react'

const Feature = ({ title, titleImg }) => {
  return (
    <div className="feature">
      <img src={titleImg} alt={title} className="icon" />
      <h4 className="text">{title}</h4>
    </div>
  )
}

export default Feature
