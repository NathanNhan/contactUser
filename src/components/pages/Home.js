import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link } from "react-router-dom";

export default function Home() {
  const [users, setusers] = useState([]);
  const [Loading, setLoading] = useState(false)
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    setLoading(true)
    const result = await axios.get("http://localhost:8000/users");
    setusers(result.data.reverse());
    setLoading(false)
  };
  const deleteUser = async (id)=>{
    await axios.delete(`http://localhost:8000/users/${id}`);
    loadUser();
  }
  if(Loading){
    return(
      <div className="text-center">loading...</div>
    )
  }
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index)=>{
                return (
                    <tr key={user.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link className="btn btn-primary mr-2" to={`users/${user.id}`}>View</Link>
                            <Link className="btn btn-outline-primary mr-2" to={`users/edit/${user.id}`}>Edit</Link>
                            <Link className="btn btn-danger" onClick={()=>deleteUser(user.id)}>Delete</Link>
                        </td>
                    </tr>
                )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
