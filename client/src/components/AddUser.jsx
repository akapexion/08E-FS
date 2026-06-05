import React, { useState } from 'react'

const AddUser = () => {

    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);

        console.log(username);

        setUsername("");
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