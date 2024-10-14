import React, { useState } from 'react'

const Increment=()=> {
    const [count,SetCount]=useState(0)
  
    const incre=()=>{
        SetCount(count+1)
      
    }                                

    const decr=()=>{
        SetCount(count-1)
        
    }
    const res=()=>{

        SetCount(0)

       
        
    }


  return (
    <div>
        <h1 style={count>0 ?{color: 'blue'} : count<0 ?{color:'red'}:{color:'black'}} className='this'>This is {count}</h1>      
        <button className='btn1' onClick={incre}>+(Increment)</button>
        <button className='btn1' onClick={decr}>-(Decrement)</button>
        <button  className='btn1' onClick={res}>(reset)</button>
      
    </div>

    
  )
}


export default Increment

