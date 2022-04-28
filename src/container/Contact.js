import React,{useState , useEffect} from 'react'
import {useParams,useNavigate} from "react-router-dom"


const Contact = () => {
 const [name, setName] = useState("");
 const [price, setPrice] = useState("");
 const [category, setCategory] = useState("");
 const [company, setCompany] = useState("");
 const param = useParams()
 const navigate=useNavigate()
 
 
 useEffect(()=>{
   
      getdata()
 },[])

 const getdata= async()=>{
   let data1= await fetch(`http://localhost:4000/product/${param.id}`)
   console.log(data1)
   let data2= await data1.json();
  //  console.log(data2)
  setName(data2.name)
  setPrice(data2.price)
  setCategory(data2.category)
  setCompany(data2.company)
  
 }
 const updateone = async()=>{
   let data1 = await fetch(`http://localhost:4000/update/${param.id}`,{
     method:"put",
     body:JSON.stringify({name,price,category,company}),
     headers:{
      "content-Type":"application/json"
     }
      
   }
   )
   let data2=await data1.json();
   console.log(data2)
   navigate("/")
 }
  return (
    <>
    <div className='product'>
   <input type="text" className='product-1' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter product name' />
  
   <input type="text" className='product-1' value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Enter product price' />
   
   <input type="text" className='product-1' value={category} onChange={(e)=>setCategory(e.target.value)} placeholder='Enter product category' />
   
   <input type="text" className='product-1' value={company} onChange={(e)=>setCompany(e.target.value)} placeholder='Enter product company' />
   
   <button className='bts' onClick={updateone}>Update</button>
   </div>
    </>
  )
}

export default Contact