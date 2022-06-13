import React from 'react'
import Alert from './Alert'

function InitiatePayment() {
    return (
        <form>
            {/* <Alert/> */}
            <div className="form-content">
                <label>name</label>
                <input type="text" />
            </div>

            <div className="form-content">
                <label>amount</label>
                <input type="number" />
            </div>

            <div className="form-content">
                <label>currency</label>
                <select name="">
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