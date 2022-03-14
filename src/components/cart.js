import React, { useState } from 'react'
import '../App.css';
import "../styles.css"




function Cart() {

    //setting a usestate to add to the function
    const[number, setNumber] = useState(1)
    


    const add = () =>{
        setNumber(number + 1)
        
    }

    const subtract = () =>{
        setNumber(number - 1 )
       
    }
  return (

    <div>
        <div className='Cart'>
        <div>
            <h1>Shopping Cart</h1>
        </div>
        </div>

        <div>
            <table className='Cart-table'>
                
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>

                    <tr className='border'>
                        <td>
                            <div className='media'>
                            <img src='images/img.jpg' alt='pic'/>
                            <p>Jordan</p>
                            <p>Minimalistic shop for multipurpose use</p>
                            </div>
                            </td>
                        <td>$360.00</td>
                        <td>
                            <div className='option'>
                            <input type="number" placeholder= {number}/>
                                {/* <button type='button' onClick={add}>+</button>
                                <button type='button' onClick={subtract}>-</button> */}
                                {/* <p>{number} <span onClick={add}>+</span> <span onClick={subtract}>-</span></p> */}
                            </div>
                        </td>
                        <td>$720.00</td>
                    </tr>

                    <tr className='border'>
                        <td>
                            <div className='media'>
                            <img src='images/img9.jpg' alt='pic'/>
                            <p>All stars</p>
                            <p>Minimalistic shop for multipurpose use</p>
                            </div>
                            </td>
                        <td>$360.00</td>
                        <td>
                            <div className='option'>
                                <input type="number" placeholder= {number}/>
                                {/* <button type='button' onClick={add}>+</button>
                                <button type='button' onClick={subtract}>-</button> */}
                                {/* <p>{number} <span onClick={add}>+</span> <span onClick={subtract}>-</span></p> */}
                            </div>
                        </td>
                        <td>$720.00</td>
                    </tr>

                    <tr className='border'>
                        <td>
                            <div className='media'>
                            <img src='images/img6.jpg' alt='pic'/>
                            <p>Jordan</p>
                            <p>Minimalistic shop for multipurpose use</p>
                            </div>
                            </td>
                        <td>$360.00</td>
                        <td>
                            <div className='option'>
                            <input type="number" placeholder= {number}/>
                                {/* <button type='button' onClick={add}>+</button>
                                <button type='button' onClick={subtract}>-</button> */}
                                {/* <p>{number} <span onClick={add}>+</span> <span onClick={subtract}>-</span></p> */}
                            </div>
                        </td>
                        <td>$720.00</td>
                    </tr>
                
            </table>
        </div>
    </div>
  )
}

export default Cart