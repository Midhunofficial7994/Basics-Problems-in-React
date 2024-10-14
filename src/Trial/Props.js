import React from 'react'

const Props = (props) => {
  return (
    <div>
      <h1 className='bg-warning'>{props.names}</h1>
      <h1 className='bg-white'>{props.names}</h1>
      <h1 className='bg-success'>{props.names}</h1>
    </div>
  )
}

export default Props
