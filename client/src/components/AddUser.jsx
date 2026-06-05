import React from 'react'

const AddUser = () => {
    return (
        <div>

            <form className='flex justify-center my-24'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Settings</legend>
                <div className="join">
                    <input type="text" className="input join-item" placeholder="Product name" />
                    <button className="btn join-item">save</button>
                </div>
            </fieldset>
            </form>
        </div>
    )
}

export default AddUser