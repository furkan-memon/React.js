import React from 'react'
import {useParams} from 'react-router-dom'
const CorsesDitels = () => {
    const params =useParams()

  return (
    <div><h1> 
        {params.id} CorsesDitels</h1></div>
  )
}

export default CorsesDitels