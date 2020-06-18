import React, { Component } from "react"
import borderless from '../assets/borderless.jpg'
import DevInterest from './devInterest.js'
import DevList from './devList.js'
import Timeline from './timeline.js'
import Education from './education.js'

class About extends Component {

  render() {
    return(
      <div class="about">
        <img src={borderless} alt="borderless" />
        <div class="description">
          <div class="paragraph">Hello! I'm Levi Kaplan, a Computer Science undergraduate student studying at Northeastern University in Boston. I come from a small town in Northern California, so Boston is remarkably lively and bitterly cold. I am currently a front end software engineer at Veracode, and my strongest skills are in Object Oriented Java development. Other academic interests lie in optimal language acquisition and game development. I have been studying Japanese to some</div>
        </div>
        <div class="description">
          degree for the last seven years, and I lead a small game development studio with some friends. When I'm not programming, you might find me at a concert writing or taking photos for Northeastern's Artistry Magazine, or trying out a new cooking technique in the kitchen. I'm interested in research and hope to one day pursue a PhD in Computer Science. My other interests include coffee and reading colossal fantasy novels. Enjoy checking out my work!
        </div>
        <div className="aboutBreak"></div>
        <div className="interests">
          <DevInterest
            title="Domain Interests"
            column1=<DevList
              item1="Machine Learning"
              item2="Natural Language Processing"
              item3="Software Security"
              item4="Privacy"
              item5="Ethical AI"
              item6="Design" />
            column2=<DevList
              item1=""
              item2=""
              item3=""
              item4=""
              item5="" />
             />
          <div className="interest2">
           <DevInterest
             title="Software"
             column1=<DevList
               item1="IntelliJ"
               item2="Eclipse"
               item3="XCode"
               item4="Unity"
               item5=""
               item6="" />
             column2=<DevList
               item1="Gradle"
               item2="Spring"
               item3="Mockito"
               item4="Docker"
               item5="Node"
               item6="" />
              />
          </div>
          <div className="interest3">
           <DevInterest
             title="Domain Interests"
             column1=<DevList
               item1="Java"
               item2="Git"
               item3="C#"
               item4="Python"
               item5=""
               item6="" />
             column2=<DevList
               item1="Swift"
               item2="SQL"
               item3="Javascript"
               item4="React"
               item5=""
               item6="" />
              />
          </div>

          </div>
        <div><Education /></div>
    </div>
    )
  }
}

export default About;
