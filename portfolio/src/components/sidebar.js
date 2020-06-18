import React, { Component } from 'react'
import headshot from '../assets/headshot.jpeg'
import Social from './social.js'
class SideBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="sidebar">
        <div className="headshot">
          <img width="10" height="10" src={headshot} alt="headshot"/>
        </div>
        <h2>Levi Kaplan</h2>
        <h3><i>Computer Science</i></h3>
        <br />
        <h4><b>Northeastern University</b></h4>
        <h4>kaplan.l@northeastern.edu</h4>
        <Social />
      </div>

    )
  }

}

export default SideBar
