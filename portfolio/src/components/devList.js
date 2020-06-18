import React from 'react'

function DevList(props) {
  return(
    <div className="devList">
      <ul>
        {props.item1}<br></br>
        {props.item2}<br></br>
        {props.item3}<br></br>
        {props.item4}<br></br>
        {props.item5}<br></br>
        {props.item6}<br></br>
      </ul>
    </div>
  )
}

export default DevList;
