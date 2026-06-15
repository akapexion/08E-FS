import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AllUsers = () => {

    const [users, setUsers] = useState([]);
    var i = 1;

    const getUsers = async () => {

        const base_url = "http://localhost:3000";

        try {
            const response = await axios.get(`${base_url}/users`);

            console.log(response.data);
            setUsers(response.data);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);




    return (
        <>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 w-[500px] justify-self-center my-24">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users.map((u) => (
                        <tr>
                            <th>{i++}</th>
                            <td>{u.user_name}</td>
                            <td className='flex gap-3'>
                                <button className="btn btn-soft btn-info btn-sm">Edit</button>
                                <button className="btn btn-soft btn-error btn-sm">Delete</button>
                            </td>
                        </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AllUsers