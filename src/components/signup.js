import React, { useState } from 'react'
import "../signup.css"

function Signup() {
    const[Firstname, setFirstname] = useState('')
    const[Lastname, setLastname] = useState('')
    const[email, setEmail] = useState('')
    const[gender, setgender] = useState('')
    // const[category, setcategory] = useState('')
    const[password, setPassword] = useState('')
    const[confirm, setConfirmpasword] = useState('')
    const[nike, setNike] = useState(false)
    const[puma, setPuma] = useState(false)
    const[Addidas, setAddidas] = useState(false)
    const[reebok, setReebok] = useState(false)
    const[Balanciaga, setBalanciaga] = useState(false)


  return (
    <div>
        <div className='register'>
            <h2>Register</h2>
        </div>

        <div className='main-form'>
            <form className='formz'>
                <div className='input-form'>
                <label>FirstName</label>
                <input type= "text" value={Firstname} onChange= {(e) => setFirstname(e.target.value)}/>
                
                <label>LastName</label>
               
                <input type= "text" value={Lastname} onChange ={(e) => setLastname(e.target.value)}/>
                </div>
                
                <div className='input-form'>
                <label>Email</label>
                <input type= "email" value={email} onChange = {(e) => setEmail(e.target.value)}/>
                </div>
                

              <div className='input-formz'>
                  

                  
                <p>Gender</p>
                <label>male
                <input type= "radio" value="male" checked= {gender == "male"} onChange = {(e) => setgender(e.target.value)}/>
                </label>

                <label>female
                <input type= "radio" value="female" checked= {gender == "female"} onChange = {(e) => setgender(e.target.value)}/>
                </label>
                
            </div>
                
            <div className='input-formz'>
                <p>Category</p>
                <label>Nike</label>
                <input type= "checkbox" name='nike' checked= {nike} onChange = {() => setNike(!nike)}/>

                <label>Addidas</label>
                <input type= "checkbox" name='addidas' checked= {Addidas} onChange = {() => setAddidas(!Addidas)}/>

                <label>Reebok</label>
                <input type= "checkbox" name='reebok' checked= {reebok} onChange = {() => setReebok(!reebok)}/>

                <label>Balanciaga</label>
                <input type= "checkbox" name='balanciaga' checked= {Balanciaga} onChange = {() => setBalanciaga(!Balanciaga)}/>

                <label>Puma</label>
                <input type= "checkbox" name='puma' checked= {puma} onChange = {() => setPuma(!puma)}/>
            </div>

            <div className='input-form'>
                <label>Password</label>
                <input type= "password" value={password} onChange = {(e) => setPassword(e.target.value)}/>
               
                <label>Confirm Password</label>
                <input type= "password" value={confirm} onChange = {(e) => setConfirmpasword(e.target.value)}/>
                </div>
                

            </form>
        </div>
    </div>
  )
}

export default Signup