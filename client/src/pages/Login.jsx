import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async(e) => {
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:3000/login", {
                email, password
            });

            console.log(response);
        }
        catch(err){
            console.log(err);
        }
    }


  return (
    <>
         <form onSubmit={handleLogin} className='flex justify-center my-24'>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Login</legend>

                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </form>
    </>
  )
}

export default Login