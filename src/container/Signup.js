import React,{useState,useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import "./Signup.css"

const Signup = () => {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const navigate= useNavigate();

   

    const abc= async ()=>{
        if(Name && Email && Password){
        let result = await fetch('http://localhost:4000/register',{
            method:"POST",
            body:JSON.stringify({name:Name,email:Email,password:Password}),
            headers:{
                    'Content-Type':"application/json"
            },
        })
      result = await result.json()
      localStorage.setItem('user',JSON.stringify(result)  )
    console.log(result)
    navigate('/')
        
        }
        else{
            alert("please fill the form properly")
        }
    }
    useEffect(()=>{
        const add=localStorage.getItem("user");
        if(add){
            navigate('/')
        }
    })
  return (
      <>
   <div className='anc'>
       <h2>Registration</h2>
       <input type="text" value={Name} onChange={(e)=>setName(e.target.value)}  placeholder='enter your name'/>
       <input type="email" value={Email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter your email'/>
       <input type="password" value={Password} onChange={(e)=>setPassword(e.target.value)} placeholder='enter your password'/>
       <button onClick={abc}>submit</button>
   </div>
    </>
  )
}

export default Signup