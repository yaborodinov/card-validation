import React from 'react'
import StatusBar from './StatusBar'

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="main-inner">
          <StatusBar />
          <div className="content">Content</div>
        </div>
      </div>
    </div>
  )
}

export default Main
