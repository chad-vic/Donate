import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { ClipLoader } from 'react-spinners'
// import { donateFetch } from '../axios/custom'
import { pspSuccsessResponse } from '../test'
import { setErrorMessage } from '../features/alert/alertSlice'
import { nextColorStep, nextPageStep } from '../features/donateSteps/donateStepSlice'
import Alert from './Alert'

function GetPsp({handleChange,gateWay}) {
    const {display} = useSelector((store) => store.alert)
    const dispatch =  useDispatch()
    // const [isLoading,setIsLoading] = useState(false)

    const handleClick = () => {
        if (gateWay === '') {
            dispatch(setErrorMessage('please choose a payment method'))
            return
        }

        if (gateWay !== 'mtnmomo' && gateWay !== 'orange'  ) {
            dispatch(setErrorMessage(` Please ${gateWay} is not supported at the moment`))
            return
        }

        dispatch(nextPageStep())
        dispatch(nextColorStep())
    }

  return (
    <div>
        <h3 className='method-title'>Payment methods</h3>
         {display && <Alert/> }
        <div className="payment-methods">
            {
               pspSuccsessResponse.map((item) => {
                return (
                    <div className='method-item' key={item.provider_id}>
                        <input type="radio" value={item.provider_short_tag}
                            onChange={handleChange}
                            checked={gateWay === item.provider_short_tag} />
                        <img src={item.provider_logo} alt={item.provider_short_tag}  />
                    </div>
                )
                })        
            }
        </div>
        <div className='continue-btn'>
            <button onClick={handleClick}>Continue</button>
        </div>
    </div>
  )
}

export default GetPsp

// getting psps from api ******api has some pb at the moment*****
  
// useEffect(() => {
//  const transaction_id = localStorage.getItem('transaction_id') 
//     setIsLoading(true)
//     const fetchPsps = async () => {
//         try {
//             const {data} = await donateFetch(`/transaction/getpsp/${transaction_id}`)
//             setIsLoading(false)
//             setPsps(data.data)
//         } catch (error) {
//             console.log(error);
//             setIsLoading(false)
//             dispatch(setErrorMessage('something went wrong try later'))
//         }
//     }

//    setTimeout(() => {
//     fetchPsps()
//    }, 2000);
// },[dispatch])
