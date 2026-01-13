import React from 'react'
import Card from './Card.jsx'
import data from  './data.js'

const Cards = (props) => {

  return (
    <div  className='cards-container'>
        
        {data.map((item, index)=>{
            return <Card key={index} item={item}/>
        })}
      {/* <  Cards/> */}

      </div>
  )
}

export default Cards

