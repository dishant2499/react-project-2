import React,{useState,useEffect} from 'react'
import {Data} from './data'
import Unique from './unique'

const Time = () => {
    const [first, setFirst] = useState("")
    const [data, setData] = useState("")
    const[text1,setText1]=useState("")
    
    

    useEffect(()=>{
        gethour()
    })

    let gethour = ()=>{
        let result=new Date().getHours()
        if(result>=0 && result<12){
                setFirst("Good Morning")
                setData("skyblue")
        }
        else if(result>=12 && result <16){
            setFirst("Good afternoon")
            setData("yellow")
        }
        else if(result>=16 && result <20){
            setFirst("Good Evening")
            setData("green")
        }
        else if(result>=20 && result <=24){
            setFirst("Good Night")
            setData("red")
        }
        
    }

   
     setInterval(() => {
        let text2= new Date().toLocaleTimeString();
      setText1(text2)
    }, 1000);

    
  return (
      <>
    <h1 style={{display:"inline"}} >Hii Sir, <span style={{color : `${data}`}}>{first} </span>  </h1>
    <span>{text1}</span>
    {Data.map((curelem)=>{
      return(
        <Unique {...curelem}/>
      )

     
    })}
   
    </>
  )
}

export default Time