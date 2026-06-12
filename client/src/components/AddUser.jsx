import React, { useState } from 'react'
import axios from 'axios';
import {toast} from 'react-hot-toast';

const AddUser = () => {

    const [username, setUsername] = useState("");

    const handleSubmit = async(e) => {
        // console.log(e);
        // console.log(username);
        // setUsername("");
        const base_url = "http://localhost:3000";

        try{
            e.preventDefault();
            const response = await axios.post(`${base_url}/adduser`, {
                username
            });
            console.log(response.data.message);
            toast.success(response.data.message);

            setUsername("");
        }
        catch(err){
            console.log("Error: ",err);
        }


    }

    return (
        <div>

            <form onSubmit={handleSubmit} className='flex justify-center my-24'>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Add User</legend>
                    <div className="join">
                        <input type="text" className="input join-item" placeholder="User Name Here..." value={username} onChange={(e) => setUsername(e.target.value)} />
                        <button className="btn join-item">save</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default AddUser