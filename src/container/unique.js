import React,{useState} from 'react'

const Unique = ({answer,question,id}) => {
    const[text3,setText3]=useState(false)
    const dish =()=>{
        setText3
        (!text3)
      }
  return (
    <div key={id}>
    <div className='dish21'key={id}>
      <span onClick={dish}>{text3?"-":"+"}</span>
      <span>{question}</span>
    </div>
    { text3 && <div className='dish22'>
      <p>{answer}</p>
    </div>}</div>
  )
}

export default Unique