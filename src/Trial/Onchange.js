// import React from 'react'

// const Onchange = () => {

//     const functionA=(e)=>{
//         console.log(e.target.value);
//     }
//   return (
//     <div>
//       <input  onChange={functionA} type='text'/>
//     </div>
//   )
// }


import React from 'react'

const Onchange = () => {
  const functionB=(e)=>{
    console.log(e.target.value);
  }                                          
  return (
    <div>
      <input  onChange= {functionB} type='text'/>
    </div>
  )
}




export default Onchange
