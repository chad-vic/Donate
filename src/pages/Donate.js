import React, { useState } from 'react'
import GetPsp from '../components/GetPsp'
import InitiatePayment from '../components/InitiatePayment'
import MakePayment from '../components/MakePayment'
import Loader from '../components/Loader'
import PaymentStatus from '../components/PaymentStatus'
import PayTrack from '../components/PayTrack'
import { useSelector } from 'react-redux'

function Donate() {
  const [gateWay, setGateWay] = useState('')

  const handleChange = (e) => {
      setGateWay(e.target.value)
  }

  const { isLoading } = useSelector((store) => store.loader)
  const { pageInitialStep } = useSelector(store => store.donateStep)
  return (
    <div className='body'>
      {isLoading && <Loader />}
      <div className="form-container">
        {pageInitialStep < 3 && <PayTrack />}
        {pageInitialStep === 0 && <InitiatePayment />}
        {pageInitialStep === 1 && <GetPsp handleChange={handleChange} gateWay={gateWay} />}
        {pageInitialStep === 2 && <MakePayment gateWay={gateWay}  />}
        {pageInitialStep === 3 && <PaymentStatus />}
      </div>
    </div>
  )
}

export default Donate