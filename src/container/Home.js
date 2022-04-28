import React,{useState,useEffect} from 'react';
import { AiFillDelete } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


import "./Home.css"

const Home = () => {
  const [first, setFirst] = useState([])

  useEffect(()=>{
        productdata()
  },[])

  const productdata= async ()=>{
      let data=await fetch("http://localhost:4000/product")
      let result=await data.json()
      console.log(result)
      setFirst(result)
      
  }

  const deleteone= async (id)=>{
      let data1=await fetch(`http://localhost:4000/delete/${id}`,{
        method:"delete"
      })
      data1= await data1.json()
      console.log(data1)
      if(data1){
        productdata()
      }

  }
  return (
    <>
   <div className='table'>
     <h1>Products</h1>
     <div className='table1'>
     <table>
       <thead>
       <tr>
           <td className='abc1'>Sr.no</td>
           <td className='abc1'>Name</td>
           <td className='abc1'>Price(Rs)</td>
           <td className='abc1'>Company</td>
           <td className='abc1'>Category</td>
          
         </tr>
       </thead>
       <tbody>
         {first.map((curelem,index)=>{
           return(
            <tr key={index}>
            <td className='abc1'>{index+1}</td>
            <td className='abc1'>{curelem.name}</td>
            <td className='abc1'>{curelem.price}</td>
            <td className='abc1'>{curelem.company}</td>
            <td className='abc1'>{curelem.category}</td>
            <td className='abc' onClick={()=>deleteone(curelem._id)}>< AiFillDelete />  </td>
            <td className='abc'><NavLink to={`/contact/${curelem._id}`} style={{color:"black"}}>< FaPen /></NavLink> </td>
           
            
          </tr>
           )
         })}
      

       </tbody>
     </table>
     </div>
     
   </div>
    </>
  )
}

export default Home