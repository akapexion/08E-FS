import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const AllUsers = () => {

    const [users, setUsers] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editName, setEditName] = useState("");
    const [refresh, setRefresh] = useState(false);


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
    }, [refresh]);

    const handleEdit = (u) => {
        setEditingId(u._id);
        setEditName(u.user_name);

        console.log(editingId);
    }

    const handleSave = async (id) => {

        const base_url = "http://localhost:3000";

        try {
            const response = await axios.put(`${base_url}/updateuser/${id}`, {
                editName
            });

            console.log(response);

            setEditingId(null);
            setRefresh(!refresh);

            toast.success(response.data.message);
        }
        catch (err) {
            console.log("Error Updating Data", err);
        }
    }

    const handleDelete = async(id) => {
        const base_url = "http://localhost:3000";

        try{
            const response = await axios.delete(`${base_url}/deleteuser/${id}`);

            console.log(response);

            setRefresh(!refresh);

            toast.success(response.data.message);
            
        }
        catch(err){
             toast.error(err.response?.data?.message || "Error deleting employee");
        }
    }



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
                            <tr key={u._id}>
                                <th>{i++}</th>
                                <td>{

                                    editingId == u._id ?

                                        <input type="text" className='border border-gray-300 p-3' value={editName} onChange={(e) => setEditName(e.target.value)} />
                                        :
                                        u.user_name

                                }</td>
                                <td className='flex gap-3'>

                                    {editingId == u._id
                                        ?
                                        <>
                                            <button className="btn btn-soft btn-success btn-sm" onClick={() => handleSave(u._id)}>Save</button>
                                            <button className="btn btn-soft btn-warning btn-sm" onClick={() => setEditingId(null)}>Cancel</button>
                                        </>
                                        :

                                        <>
                                            <button className="btn btn-soft btn-info btn-sm" onClick={() => handleEdit(u)}>Edit</button>
                                            <button className="btn btn-soft btn-error btn-sm" onClick={() => handleDelete(u._id)}>Delete</button>
                                        </>
                                    }


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