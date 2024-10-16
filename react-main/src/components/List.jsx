import React from 'react'

const List = () => {



  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew"];

  const arr2= fruits.map((elemnts)=>{
        return <li>{elemnts}</li>
  })

  
  return(<ul className='ml-20'>{arr2}</ul>)
  
}

export default List
