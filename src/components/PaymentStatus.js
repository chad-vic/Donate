import React ,{useEffect,useState} from 'react'
import { useDispatch } from 'react-redux'
import { ClipLoader } from 'react-spinners'
import { donateFetch } from '../axios/custom'
import { canselPayment } from '../features/donateSteps/donateStepSlice'

function PaymentStatus() {
  const [isLoading,setIsLoading] = useState(true)
  const [successMessage,setSuccessMessage] = useState('')
  const [errorMessage,setErrorMessage] = useState('')
  const transaction_id = localStorage.getItem('transaction_id') 
  const dispatch =  useDispatch()

      useEffect(() => {
        const getPaymentStatus = async () => {
          setIsLoading(true)

          try {
            const {data} = await donateFetch(`/paymentstatus/${transaction_id}`)

            if (data?.status === "success") {
                setIsLoading(false)
                setSuccessMessage('Payment Successful !')
                clearInterval(interval)
                clearTimeout(timeOut)
            } else if (data?.status === "failed") {
                setIsLoading(false)
                setErrorMessage("payment failed....")
                clearInterval(interval)
                clearTimeout(timeOut)

        }
          } catch (error) {
             clearInterval(interval)
             clearTimeout(timeOut)
             return error?.response
          }
      }  


   const timeOut = setTimeout(()=>{
    clearInterval(interval)
    setIsLoading(false)
    setErrorMessage("payment failed...")
    alert('transaction took longer to complete, please try again in 5s')
    clearTimeout(timeOut)
    },60000)
    
  const interval = setInterval(() => {
    getPaymentStatus()
   }, 2000)

  },[transaction_id])

  if (isLoading) {
    return (
      <div style={{color:'#2cb1bc',width:"50%",margin:"0 auto"}}>
           <ClipLoader/> 
      </div>
    )
  }

  return (
    <div>
      <h2>{successMessage && "Payment Successful !"}</h2>
      {errorMessage && <div>
        <h3 style={{color:'#842029'}}>{errorMessage && "Payment Failed..."}</h3>
        <button style={{width:'70px'}} onClick={() => dispatch(canselPayment())}>Retry</button>
      </div>
      } 
    </div>
  )
}

export default PaymentStatus