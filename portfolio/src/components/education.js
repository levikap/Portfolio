import React, { Component } from 'react'
import Title from './title.js'
import MyTimeline from './timeline.js'

class Education extends Component {
  render() {
    return (
      <div class="education">
      <div>
        <Title
          title="Education"
        />
        </div>
        <MyTimeline />
      </div>



    )
  }
}

export default Education;
