import React from 'react'

const Card = (props) => {

  if(props.idx!==93){
    return (
      <div className='flex  flex-wrap justify-center  items-center w-40 bg-violet-700'>
        <h1>{props.username}</h1>
      </div>
    )
  }
  else {
    return (<h1> vishal is chutiya </h1>)
  }

}

export default Card
