import React, { useState ,useEffect} from 'react'

const UseEffect = () => {
  const [counter,setCounter]=useState(0)
// const[color,setColor]=useState("red");
     useEffect(()=>{
      console.log("Heloooo")
     })
  return (
    <div>
     <h1>{counter}</h1> 
     <button onClick={()=> setCounter(counter+1)}>+</button>
     <button onClick={()=> setCounter(counter+1)}>+</button>
     {/* <button style={{background:color}} onClick={()=> setColor((prev)=>prev==='red'?"blue":'red')}>+</button>   previous state */}
    </div>
  )
}

export default UseEffect;
