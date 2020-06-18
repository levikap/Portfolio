import React, { Component } from 'react'
import Title from './title.js'
import Subtitle from './subtitle.js'
import ProjectCard from './projectCard.js'
import spreadsheet from '../assets/spreadsheet.png'
import solitaire from '../assets/solitaire.png'
import lightemall from '../assets/lightemall.png'
import lightemallps from '../assets/lightemall-ps.png'
import minesweeper from '../assets/minesweeper.png'
import scoops from '../assets/scoops.png'
import lostspace from '../assets/lostspace.jpeg'
import wobl from '../assets/wobl.jpeg'
import color from '../assets/color.jpeg'
import borderless from '../assets/borderless.jpg'
import jisshuu from '../assets/jisshuu.png'
import goodgreen from '../assets/goodgreen.png'

class Projects extends Component {
  render() {
    return (
      <div class="projects">
          <Title title="Projects" />
          <div className="projectRow">
            <Subtitle subtitle="School Assignments" breakType="subtitleBreak" />
            <ProjectCard link="/projects/spreadsheet" image={spreadsheet} title="Spreadsheet App"/>
            <ProjectCard link="/projects/solitaire" image={solitaire} title="Pyramid Solitaire"/>
            <ProjectCard link="/projects/lightemall" image={lightemall} title="Light Em All"/>
            <ProjectCard link="/projects/minesweeper" image={minesweeper} title="Minesweeper"/>
          </div>
          <div className="projectRow">
            <Subtitle subtitle="Game Development" breakType="subtitleBreak" />
            <ProjectCard link="/projects/scoops" image={scoops} title="Scoops Game"/>
            <ProjectCard link="/projects/lostspace" image={lostspace} title="Lost Space"/>
            <ProjectCard link="/projects/wobl" image={wobl} title="Wobl"/>
            <ProjectCard link="/projects/colortap" image={color} title="Color Tap"/>
          </div>
          <div className="projectRow">
            <Subtitle subtitle="Personal Projects" breakType="subtitleBreak" />
            <ProjectCard link="/projects/website" image={borderless} title="Personal Website"/>
            <ProjectCard link="/projects/jisshuu" image={jisshuu} title="Jisshuu App"/>
          </div>
          <div className="projectRow">
            <Subtitle subtitle="Hackathons" breakType="subtitleBreak" />
            <ProjectCard link="/projects/goodgreen" image={goodgreen} title="GoodGreen App"/>
          </div>
      </div>
    )
  }

}

export default Projects;
