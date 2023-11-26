import React from 'react'
import StatusPoint from './StatusPoint'

// those values could be changed, but the logic for status bar will work flexible
const currentStep = 4
const totalSteps = 4

const StatusBar = () => {
  const statusPoints = Array.from(
    { length: totalSteps },
    (_, index) => index + 1,
  )

  return (
    <div className="status">
      {statusPoints.map((step, index) => {
        const indexNumber = index + 1
        return (
          <div key={step} className="point-wrapper">
            <StatusPoint
              indexNumber={indexNumber}
              activePoint={currentStep === step}
              currentStep={currentStep}
            />
            {indexNumber < totalSteps ? <div className="separator"></div> : ''}
          </div>
        )
      })}
    </div>
  )
}

export default StatusBar
