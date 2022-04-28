import React,{useState,useEffect} from 'react'
import {useNavigate} from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const abc= async (e)=>{
        e.preventDefault()
           
            let data=await fetch('http://localhost:4000/login',{
                method:"post",
                body:JSON.stringify({email:email,password:password}),
                headers:{
                    'Content-Type':"application/json"
                }
            })
            data = await data.json()
            console.log(JSON.stringify( data))
            if(data.name){
            localStorage.setItem('user',JSON.stringify(data))
            
            navigate('/')
            }
            else{
                alert("please enter valid email or signup")
            }
           

    }
 
    useEffect(()=>{
        const data=localStorage.getItem("user")
        if(data){
            navigate('/')
        }
    })

  return (
    <>
    <div className='container w-50 p-5'>
    <form>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" value={email}  onChange={(e)=>setEmail(e.target.value)}  id="inputEmail3" autoComplete='off'/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" value={password}  onChange={(e)=>setPassword(e.target.value)} id="inputPassword3"/>
    </div>
  </div>

  
  
  <button type="submit" className="btn btn-primary" onClick={abc}>Login</button>
</form>
</div>
    </>
  )
}

export default Login