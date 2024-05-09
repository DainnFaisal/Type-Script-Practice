import React, { useState } from 'react'
import '../StyleSheets/Register.css'
import { useNavigate } from 'react-router-dom';

const Register = () => {

      const [name, setName] = useState<string>("");
      const [email, setEmail] = useState<string>("");
      const [number, setNumber] = useState<string>("");
      const [password, setPassword] = useState<string>("");

      const navigate = useNavigate();

      let object = {
            name,
            email,
            number,
            password
      }

      async function handleRegister(e : any) {
            e.preventDefault();

            let result = await fetch('https://api.storerestapi.com/auth/register', {
                  method: "POST",
                  body: JSON.stringify(object),
                  headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                  },

            });
            let data = await result.json();

            localStorage.setItem('Register-Info',JSON.stringify(data));
            console.log ('User Registered Successfully', data);
            navigate('/Login');
            
            setName("");
            setEmail("");
            setNumber("");
            setPassword("");
      }

      return (
            <>
                  <div className='container'>
                        <div className='register-form'>
                              <form>
                                    <h3 className='register-heading'>Register:</h3>
                                    <input type='text' placeholder='Name' className='input-fields' value={name} onChange={(e) => setName(e.target.value)} />
                                    <br />
                                    <br />
                                    <input type='email' placeholder='Email' className='input-fields' value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <br />
                                    <br />
                                    <input type='number' placeholder='Number' className='input-fields' value={number} onChange={(e) => setNumber(e.target.value)} />
                                    <br />
                                    <br />
                                    <input type='password' placeholder='Password' className='input-fields' value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <br />
                                    <br />
                                    <button className='register-btn' onClick={handleRegister} >Register</button>
                              </form>
                        </div>
                  </div>
            </>
      )
}

export default Register