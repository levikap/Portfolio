import React, { Component } from 'react'
import DevDetails from './devDetails.js'
import Subtitle from './subtitle.js'
import Title from './title.js'

function Details(props) {
    return(
      <div className="details">
        <div>
          <Title title={props.title} />
          <Subtitle subtitle={props.name} breakType="subtitleBreak" />
          <div className="detailsImage">
            <img src={props.image} alt={props.name} />
          </div>
          <div className="devDetail1">
            <DevDetails title={props.devTitle1} item1={props.dev1Item1} item2={props.dev1Item2} />
          </div>
          <div className="devDetail2">
            <DevDetails title={props.devTitle2} item1={props.dev2Item1} item2={props.dev2Item2} />
          </div>
          <div className="devDetail3">
            <DevDetails title={props.devTitle3} item1={props.dev3Item1} item2={props.dev3Item2} />
          </div>
          <div className="description">
            <div className="paragraph">{props.description1}</div>
          </div>
          <div class="description">
            {props.description2}
          </div>
        </div>
          <div class="footer"></div>
      </div>
    )
}

export default Details;
