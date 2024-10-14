import React, { useState } from 'react'



const Decrement = () => {
    const [count,SetCount]=useState(0);
      

    const inc=()=>{
        SetCount(count+1)
    }
    const dec=()=>{
        SetCount(count-1)
    }
    const res=()=>{
        SetCount(0)
    }



  return (
    <div>
        <h1>THE NUMBER IS {count}😎</h1>
      <button onClick={inc}>+Increment👌</button>
      <button onClick={dec}>Decrement👌</button>
      <button onClick={res}>+Reset😁</button>
    </div> 
  )
}

export default Decrement


