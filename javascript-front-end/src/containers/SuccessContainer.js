import React from 'react'
import './SuccessContainer.css'

const SuccessContainer = () => {
  return(
        <div className="success">
          <div className="successHeader">
          <h1>Congratulations!</h1>
          <h3 className="congratsH3">You have now sailed the Seven Seas of Code, watch this video!</h3>
        </div>
        <div className="successVideo">
          <video src="Success.m4v" controls/>
        </div>
      </div>
)}

export default SuccessContainer;
