import React,{useEffect} from 'react'

const Api = () => {

    useEffect(async ()=>{
        let data=await fetch("https://reqres.in/api/users?page=2")
        // console.log(data)
        let data1= data.json()
        console.log(data1)
    },[])
  return (
    <div>api</div>
  )
}

export default Api