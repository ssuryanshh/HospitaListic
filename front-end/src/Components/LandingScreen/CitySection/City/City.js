import React from 'react'
import {Link} from 'react-router-dom'

function City({id,city,image}) {
  return (
    <Link to ={`/hospitals/${id}`}>
        <div className="city_card">
      <img className="city_img" src={image} alt={`${id}_city`} />
      <div className="content">
        <h3 className="city_name">{city}</h3>
      </div>
    </div>
    </Link>
  )
}

export default City
