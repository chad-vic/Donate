import React from 'react'
import { FadeLoader } from 'react-spinners'
import Alert from './Alert'

function MakePayment() {
  return (
    <>
      <h2 className="total-amount">Amount: 2000 XAF</h2>
      <form>
        {/* <Alert/> */}
        <div className="form-content">
          <label>phone number</label>
          <input type="text" />
        </div>

        <div className="pay-btn">
          <button className='cansel'>Cancel</button>
          <button>Donate</button>
        </div>
      </form>
    </>
  )
}

export default MakePayment