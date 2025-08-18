import React,{useState,useEffect} from 'react';
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom';


const Userupdate = () => {

  const{id} = useParams()
  
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const navigate = useNavigate();

   useEffect(() => {

    axios.get("http://localhost:8082/getuser/"+id)
    .then(result=>{
        console.log(result)
        setName(result.data.name)
        setEmail(result.data.email)
        setAge(result.data.age)
    })
    .catch(err=>{
        console.log("Error in fetching users", err)
    })
    }, [id])


    const Update=(e)=> {
      e.preventDefault();
       axios.put("http://localhost:8082/updateUser/"+id, {name,email,age})
    .then(result=>{
      
      console.log(result);
      navigate("/")
    
    
    })
    .catch(err=>console.log(err))
    }
  return (
    <>
    <div className="main">
      <form onSubmit={Update}>
        <div className="container">
                       <h1>Update User</h1>
                        <label htmlFor="Name"></label>
                        <div class="input-group input-group-sm mb-3">
                                <input type="text" value={name} placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                               </div>
                         <label htmlFor="Email"></label>
                        <div class="input-group input-group-sm mb-3">
                                <input type="email" value={email} placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                               </div>

                                <label htmlFor="Age"></label>
                        <div class="input-group input-group-sm mb-3">
                                <input type="number" placeholder='Enter your Age' value={age} onChange={(e)=>setAge(e.target.value)} class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                               </div>
                            <button type="submit" class="btn btn-primary">Update</button>                                      
                      </div>
                      </form>
    </div>
    
    </>
  )
}

export default Userupdate
