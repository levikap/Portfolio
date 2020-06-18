import React, { Component } from 'react'

function DevInterest(props) {
  return(
    <div className="devInterest">
      <div className="backgroundSquare">
        <div className="dev-column">{props.column1}</div>
        <div className="dev-column2">{props.coumn2}</div>
      </div>

      <div className="titleSquare">
        <div className="dev-title">{props.title}</div>
      </div>
    </div>
  )
}



export default DevInterest;
