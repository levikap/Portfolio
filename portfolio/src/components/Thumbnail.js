import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
import styles from '../Thumbnail.css'

function Thumbnail(props) {
  return(
    <div className="Project">
      <Link to={props.link}>
        <div className="project-image">
        <img width='10' height='10' src={props.image} alt="Project Image" />
      </div>
      <div className="project-title">{props.title}</div>
      <div className="project-category">{props.category}</div>
      </Link>
      </div>
    );
}

export default Thumbnail;
