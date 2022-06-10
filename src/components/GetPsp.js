import React from 'react'
import Alert from './Alert'

function GetPsp() {
  return (
    <div>
        <h3 className='method-title'>Payment methods</h3>
        {/* <Alert/> */}
        <div className="payment-methods">
            <div className='method-item'>
                <input type="radio" />
                <img src="https://core.payunit.net/resources/flags/mtn.png" alt="mtnmomo" />
            </div>
            <div className='method-item'>
                <input type="radio" />
                <img src="https://core.payunit.net/resources/flags/orange.png" alt="orange" />
            </div>
        </div>
        <div className='continue-btn'>
            <button>Continue</button>
        </div>
    </div>
  )
}

export default GetPsp