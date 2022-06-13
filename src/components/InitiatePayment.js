import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setErrorMessage } from '../features/alert/alertSlice'
import { initiateTransaction } from '../features/transaction/transactionSlice'
import Alert from './Alert'

function InitiatePayment() {
    const [transaction,setTransaction] = useState({ name:'', total_amount:'', currency:''})
    const {display} = useSelector((store) => store.alert)
    const dispatch = useDispatch()
    const  return_url = 'localhost'

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setTransaction((previousValue) => {
            return {
                ...previousValue,
                [name]:value
            }
        })
    }

    const  handleSubmit = (e) => {
        e.preventDefault()
        const { name, total_amount, currency} = transaction

        if (!name || !total_amount || !currency ) {
            dispatch(setErrorMessage('please provide all values'))
            return;
        }

        if (name.length < 3 ) {
            dispatch(setErrorMessage('please name should be atleat 2 characters'))
            return;
          }

        if (parseInt(total_amount) < 100 ) {
            dispatch(setErrorMessage('please amount should be atleast 100'))
            return;
        }

          const transactionValue = {
              name,
              total_amount:parseInt(total_amount),
              currency,
              return_url
          }

       dispatch(initiateTransaction(transactionValue))
    }

    return (
        <form onSubmit={handleSubmit}>
           {display && <Alert/> } 
            <div className="form-content">
                <label>name</label>
                <input 
                 type="text" 
                 name='name'
                 value={transaction.name}
                 onChange={handleChange}
                 />
            </div>

            <div className="form-content">
                <label>amount</label>
                <input 
                type="number" 
                 name='total_amount'
                 value={transaction.total_amount}
                 onChange={handleChange}
                />
            </div>

            <div className="form-content">
                <label>currency</label>
                <select
                 name='currency'
                 value={transaction.currency}
                 onChange={handleChange}
                 >
                    <option>--choose--</option>
                    <option value="XAF">XAF</option>
                    <option value="USD">USD</option>
                </select>
            </div>

            <div>
                <button>Checkout</button>
            </div>
        </form>
    )
}

export default InitiatePayment