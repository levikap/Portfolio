import React, { Component } from 'react'

function DevDetails(props) {
  return(
    <div className="devDetails">
      <div className="devBackgroundSquare">
        <div className="dev-column">
          <ul>{props.item1}</ul>
          <ul>{props.item2}</ul>
        </div>
      </div>

      <div className="titleSquare">
        <div className="dev-title">{props.title}</div>
      </div>
    </div>
  )
}



export default DevDetails;
