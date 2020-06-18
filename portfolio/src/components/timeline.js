import React, { Component } from 'react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

class MyTimeline extends Component {
  render() {
    return(
       <div className="myTimeline">
        <Timeline lineColor={'#6EB7FB'}>
          <TimelineItem
            key="001"
            dateText="08/2018 – Present"
            dateInnerStyle={{
              background: '#4F7CAC',
               color: '#ffffff', }}
            style={{ color: '#4F7CAC',
              position: 'relative',
              top: '-200px', }}
            bodyContainerStyle={{
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0.3rem 0.3rem 1rem 0 rgba(0, 0, 0, 0.2)',
              position: 'relative',
              bottom: '-200px',
              }}
          >
            <h3>Northeastern University</h3>
            <h4>Boston, MA</h4>
            <ul><b>Khoury College of Computer Sciences</b></ul>
            <ul><b>Honors Distinction</b></ul>
            <ul><b>GPA:</b> 3.692/4.000</ul>
            <ul><b>Coursework:</b> Fundamentals of Computer Science 1&2, Discrete Structures,
         Object Oriented Design, Deep Learning Research Seminar, Algorithms, Tech and Human Values,
         Art and Design Abroad</ul>
            <ul><b>Activities:</b>Game Development Club, Peach Beach Studios, Survivor Northeastern</ul>
          </TimelineItem>
          <TimelineItem
            key="002"
            dateText="08/2011 - 05/2018"
            dateInnerStyle={{ background: '#4F7CAC', color: '#ffffff' }}
            style={{ color: '#4F7CAC',
              top: '-200px', }}
            bodyContainerStyle={{
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0.3rem 0.3rem 1rem 0 rgba(0, 0, 0, 0.2)',
              bottom: '-200px',
            }}
          >
            <h3 style={{ color: '#000' }}>University Preparatory School</h3>
            <h4 style={{ color: '#000' }}>Redding, CA</h4>
            <ul><b>GPA:</b> 4.50 Weighted, 4.00 Weighted</ul>
            <ul><b>Activities:</b> Tangent Game Studios (10-12), Math and Science Club (9-12)
            Creative Writing Club (9-10), Programming Club (10-11), Student Government (9-10)</ul>
            <ul><b>Sports:</b> Cross Country (9-10), Track (10), Tennis (9-11)</ul>
            <ul><b>Achievements:</b> Valedictorian, Sophomore Class President</ul>
          </TimelineItem>
        </Timeline>
      </div>
    )
  }
}

export default MyTimeline;
