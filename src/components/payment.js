import React from 'react'
import "../pay.css"

function Payment() {
  return (
    <div>
        <div className='pay'>
            <h2>Payment</h2>
            <div>
                <form className='pay-form'>
                    <label>Name on Card</label>
                    <input type= "text"/>

                    <label>Card Number</label>
                    <input type= "text"/>

                    <label>Expiry Date</label>
                    <input type= "month"/>

                    <label>CVV</label>
                    <input type= "text" placeholder='...'/>

                    <button type='Submit'>Make Payment</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Payment