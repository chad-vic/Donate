import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { donateFetch } from '../axios/custom'
import { setErrorMessage, setSuccessMessage } from '../features/alert/alertSlice'
import Alert from './Alert'
import { isLoading,isNotLoading } from '../features/loader/loaderSlice'
import { canselPayment, nextPageStep } from '../features/donateSteps/donateStepSlice'

function MakePayment({gateWay}) {
  const [phone_number,setPhoneNumber] = useState('')
  const {display} = useSelector((store) => store.alert)
  const {total_amount,currency} = useSelector((store) => store.transaction)
  const dispatch = useDispatch()
  const transaction_id = localStorage.getItem('transaction_id') 

  const isCameroonTel = /^6[5789]{1}[0-9]{7}$/.test(phone_number)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!isCameroonTel) {
      dispatch(setErrorMessage('please provide a valid number'))
      return
    }

    const paymentValue = {
      phone_number,
      gateway:gateWay
    }

    dispatch(isLoading())
    try {
      const {data} = await donateFetch.post(`makepayment/${transaction_id}`,paymentValue)
      dispatch(isNotLoading())
      dispatch(setSuccessMessage(data?.message))

      setTimeout(() => {
        dispatch(nextPageStep())
      }, 3000);
    } catch (error) {
      dispatch(isNotLoading())
      return error?.response
    }
  }

  return (
    <>
      <h2 className="total-amount">Amount: {total_amount} {currency}</h2>
      <form >
       {display && <Alert/> } 
        <div className="form-content">
          <label>phone number</label>
          <input type="text" value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>

        <div className="pay-btn">
          <button className='cansel' onClick={() => dispatch(canselPayment())}>Cancel</button>
          <button onClick={handleSubmit}>Donate</button>
        </div>
      </form>
    </>
  )
}

export default MakePayment