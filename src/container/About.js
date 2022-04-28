import React,{useState} from 'react'

const About = () => {
 const [name, setName] = useState("");
 const [price, setPrice] = useState("");
 const [category, setCategory] = useState("");
 const [company, setCompany] = useState("");
 const [error,setError] = useState(false)

 const product= async ()=>{
  if(!name || !price || !category || !company){
    setError(true)
    return false
   
  }
  else{
   const add=JSON.parse( localStorage.getItem('user'))._id;
   console.log(add)
   const data = await fetch("http://localhost:4000/add-product",{
     method:"post",
     body:JSON.stringify( {name,price,category,company,userid:add}),
     headers:{
       "content-Type":"application/json"
     }
   });
   const data1=await data.json();
   console.log(data1)
   setName('');
   setCategory('')
   setPrice('')
   setCompany('')
   setError(false)
  }
}

 
  return (
    <>
    <div className='product'>
   <input type="text" className='product-1' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter product name' />
   {error && !name && <span ><h6 className='invalid'>Enter valid name</h6></span>}
   <input type="text" className='product-1' value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Enter product price' />
   {error && !price && <span ><h6 className='invalid'>Enter valid price</h6></span>}
   <input type="text" className='product-1' value={category} onChange={(e)=>setCategory(e.target.value)} placeholder='Enter product category' />
   {error && !category && <span ><h6 className='invalid'>Enter valid category</h6></span>}  
   <input type="text" className='product-1' value={company} onChange={(e)=>setCompany(e.target.value)} placeholder='Enter product company' />
   {error && !company && <span ><h6 className='invalid'>Enter valid company</h6></span>}
   <button className='bts' onClick={product}>Add product</button>
   </div>
    </>
  )
}

export default About