import React from 'react'
import GetPsp from '../components/GetPsp'
import InitiatePayment from '../components/InitiatePayment'
import MakePayment from '../components/MakePayment'
import Loader from '../components/Loader'
import PaymentStatus from '../components/PaymentStatus'
import PayTrack from '../components/PayTrack'

function Donate() {
  return (
    <div className='body'>
        {/* <Loader/> */}
        <div className="form-container">
            {/* <PayTrack/> */}
            {/* <InitiatePayment/> */}
            {/* <GetPsp/> */}
            {/* <MakePayment/> */}
            <PaymentStatus/>
        </div>
    </div>
  )
}

export default Donate