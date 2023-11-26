import React from 'react'
import classNames from 'classnames'

const StatusPoint = ({ indexNumber, activePoint, currentStep }) => (
  <div
    className={classNames('statusPoint', {
      active: activePoint,
      done: indexNumber < currentStep,
    })}
  >
    {activePoint ? currentStep : ''}
  </div>
)

export default StatusPoint
