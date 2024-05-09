import React, { useState } from 'react'
import '../StyleSheets/Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {

      const [email, setEmail] = useState<string>("");
      const [password, setPassword] = useState<string>("");
      const navigate = useNavigate();

      let object = {
            email,
            password
      }

      async function handleLogin(e : any) {
                   e.preventDefault();

            try {
                  let result = await fetch('https://api.storerestapi.com/auth/login',
                        {
                              method: 'POST',
                              body: JSON.stringify(object),
                              headers: {
                                    'Content-Type': 'application/json',
                                    'Accept': 'application/json'
                              }
                        }
                  );
                  let data = await result.json();
                  localStorage.setItem('Login-Info', JSON.stringify(data));
                  console.log("User Logged in", data);
                  navigate('/CurrentWeather');

                  setEmail("");
                  setPassword("");
                 
            }
            catch (error) {
                  console.log(error);
            }
      }

      

      return (
            <>
                  <div className='container'>
                        <div className='login-form'>
                              <form onSubmit={handleLogin}>
                                    <h3 className='login-heading'>Login:</h3>
                                    <br />
                                    <input type='email' placeholder='Email' className='input-fields' value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <br />
                                    <input type='password' placeholder='Password' className='input-fields' value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <br />
                                    <button className='login-btn'>Login</button>
                              </form>
                        </div>
                  </div>
            </>
      )
}

export default Login 