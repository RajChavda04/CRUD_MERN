import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const UserCreate = () => {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const navigate = useNavigate();

  const createUser=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:8082/createUser", {name,email,age})
    .then(result=>{
      
      console.log(result);
      navigate("/")
    
    
    })
    .catch(err=>console.log(err))

  }
  return (
    <>
    <div className="main">
         <form onSubmit={createUser} >
        <div className="container">
       
                       <h1>Create User</h1>
                        <label htmlFor="name"></label>
                        <div class="input-group input-group-sm mb-3">
                                <input type="text"  placeholder='Enter your name'onChange={(e)=>setName(e.target.value)}  class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                               </div>
                         <label htmlFor="email"></label>
                        <div class="input-group input-group-sm mb-3">
                                <input type="email" placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                               </div>

                                <label htmlFor="age"></label>
                        <div class="input-group input-group-sm mb-3">
                                <input type="number" placeholder='Enter your Age' onChange={(e)=>setAge(e.target.value)} class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                               </div>
                            <button type="submit" class="btn btn-primary">Submit</button>                                      
                      </div>
            </form>          
    </div>
    </>
  )
}

export default UserCreate
