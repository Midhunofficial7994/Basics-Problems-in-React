import React from 'react'



    // on click

// const Events = () => {

//     const clickHandle=()=>{
//         console.log("You clicked me");
//     }
//   return (
//     <div>
//       <h1 className='bg-primary'>Midhun</h1>
//       <button onClick={clickHandle}>Click me</button>
//     </div>
//   )

                           
//     double click

// const Events = () => {
//     const function2=()=>{
//         alert("You double clicked me");
//     }
//   return (
//     <div>
//         <button onDoubleClick={function2}>Double Click</button>
      
//     </div>
//   )
// }




    // on change
 
   
   const Events = () => {
    const function3=(e)=>{
       console.log(e.target.value)
    }
     return (
       <div>
         <h1 className='bg-primary' id='input'>Event Handling!</h1>
        <input onChange={function3} type='text'  />
       </div>
     )
   }
   
      
        //  on mouseeover 
  
  // const Events = () => {
  //   const function4 =()=>{
  //     alert ("you Mouse over the Element")
  //   }
  //   return (
  //     <div>
  //       <h1 onMouseOver={function4}>MouseOver here</h1>
  //     </div>
  //   )
  // }


      //  on key down
  


// const Events = () => {
//   const function5=()=>{
//     alert("You pressed  the key");
//   }
//   return (
//     <div>
//   <input onKeyDown={function5} type="text"/>
//     </div>
//   )
// }

  
   export default Events
   









