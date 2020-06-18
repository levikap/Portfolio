import React, { Component } from 'react'
import {Link} from 'react-router-dom'

function ProjectCard(props) {
  return (
    <div className="projectCard">
      <Link to={props.link}>
        <div className="projectImage">
          <img src={props.image} alt={props.title} />
          <div className="projectTitle">
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProjectCard;
