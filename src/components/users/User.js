import axios from 'axios'
import React,{useState,useEffect} from 'react'
import {Link,useParams} from "react-router-dom"

export const User = () => {
    const [User, setUser] = useState({
        name:"",username:"",email:"",phone:"",website:""
    })
    const {id} = useParams()
    useEffect(() => {
        loadUser()
    }, [])
    const loadUser = async ()=>{
        const res = await axios.get(`http://localhost:8000/users/${id}`);
        setUser(res.data)
    }
    return (
      <div className="container py-4">
        <Link className="btn btn-primary" to="/">
          Back to home
        </Link>
        <h1 className="display">User id: {id}</h1>-
        <br />
        <ul className="list-group w-">
          <li className="list-group-item">name: {User.name}</li>
          <li className="list-group-item">user name: {User.username}</li>
          <li className="list-group-item">email: {User.email}</li>
          <li className="list-group-item">phone: {User.phone}</li>
          <li className="list-group-item">website: {User.website}</li>
        </ul>
      </div>
    );
}
