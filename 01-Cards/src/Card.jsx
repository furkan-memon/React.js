import React from 'react'

const Card = (props) => {
  
  
  return (
    <div className="card">
      <div className="top">
        
        <span className="price">{props.rate}</span>
      </div>

      <img
        className="avatar"
        src={props.image}
        alt="profile"
      />

      <h3>{props.name}</h3>
      <p className="role">{props.role}</p>
      <p className="company">{props.company}</p>

      <div className="skills">
        <span>{props.skills[0]}</span>
        <span>{props.skills[1]}</span>
        <span>{props.skills[2]}</span>
        <span className="more">{props.skills[3]}</span>
      </div>

      <p className="desc">
      {props.description}
      </p>

      <button>VIEW PROFILE</button>
    </div>
  );
}


export default Card
