import React, { Component } from 'react'

function Title(props) {
  return(
    <div className="title">
      <b>{props.title}</b>
      <div className="titleBreak"></div>
    </div>

  )
}

export default Title;
