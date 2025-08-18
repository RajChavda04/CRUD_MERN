import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const User = () => {

    const [user, setUser] = useState([])
    useEffect(() => {

    axios.get("http://localhost:8082/listuser")
    .then(result=>{
        setUser(result.data)
    })
    .catch(err=>{
        console.log("Error in fetching users", err)
    })
    }, [])

    const handleDelete=(id)=>{
        axios.delete("http://localhost:8082/deleteUser/"+id)
        .then(res=>{
            console.log(res)
            window.location.reload();
        
        })
        .catch(err=>console.log(err))

    }
    

    return (
        <>
            <div className="main">
                <h1>User lsit</h1>
                <Link to="/UserCreate" class="btn btn-primary">Add User</Link>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>

                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Age</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((user, index)=>{ 

                           return <tr key={index} >
                                 <td>{user.name}</td>
                                 <td>{user.email}</td>
                                 <td>{user.age}</td>
                            <td ><div class="buttons"><Link to={`/UserUpdate/${user._id}`} class="btn btn-primary">Update</Link>
                                <button class="btn btn-danger" onClick={(e)=>handleDelete(user._id)}  >Delete</button></div></td>
                        </tr>
                        })}
                       

                           

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default User
