import React, { Component } from 'react'
import Title from './title.js'
import Subtitle from './subtitle.js'
import ProjectCard from './projectCard.js'
import veracode from '../assets/veracode.jpg'
import isec from '../assets/isec.jpg'
import newman from '../assets/newman.jpeg'
import cit from '../assets/cit.jpg'
import avodah from '../assets/avodah.JPG'

class Work extends Component {
  render() {
    return (
      <div class="projects">
          <Title title="Work" />
          <div className="workRow">
            <div className="workRowLeft">
              <Subtitle subtitle="Software Engineering" breakType="smallSubtitleBreak" />
              <ProjectCard link="/work/veracode" image={veracode} title="Veracode"/>
            </div>
            <div className="workRowRight">
              <Subtitle subtitle="Research" breakType="smallSubtitleBreak" />
              <ProjectCard link="/work/research" image={isec} title="Privacy Research"/>
            </div>
          </div>
          <div className="workRow">
            <div className="workRowLeft">
              <Subtitle subtitle="Camp Counselor" breakType="smallSubtitleBreak" />
              <ProjectCard link="/work/counselor" image={newman} title="Counselor at Camp Newman"/>
            </div>
            <div className="workRowRight">
            <Subtitle subtitle="Volunteer" breakType="smallSubtitleBreak" />
            <ProjectCard link="/work/avodah" image={avodah} title="Avodah"/>
            <ProjectCard link="/work/cit" image={cit} title="CIT"/>
            </div>
          </div>
      </div>
    )
  }
}

export default Work;
