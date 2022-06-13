import React from 'react'
import { useSelector } from 'react-redux'

function PayTrack() {
  const { colorInitialStep } = useSelector((store) => store.donateStep)
  return (
    <>
      <h2 className='pay-title'>Donate with Payunit</h2>
      <div className="payment-track">
        <div className={`${colorInitialStep >= 1 ? 'track-item track-one is-active' : 'track-item track-one'}`}> 1 </div>
        <div className={`${colorInitialStep >= 2 ? 'track-item track-two is-active' : 'track-item track-two'}`}> 2 </div>
        <div className={`${colorInitialStep >= 3 ? 'track-item track-three is-active' : 'track-item track-three'}`}> 3 </div>
      </div>
    </>
  )
}

export default PayTrack