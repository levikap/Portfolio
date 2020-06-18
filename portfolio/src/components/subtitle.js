import React, { Component } from 'react'

function Subtile(props) {
  return(
    <div className="subtitle">
      {props.subtitle}
      <div className={props.breakType}></div>
    </div>

  )
}

export default Subtile;
