import React, { Component } from 'react';
import logo from './assets/logo.svg';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar.js';
import SideBar from './components/sidebar.js'
import About from './components/about.js'
import Projects from './components/projects.js'
import Work from './components/work.js'
import Photography from './components/photography.js'
import Refs from './components/refs.js'
import Contact from './components/contact.js'
import Details from './components/details.js'
import spreadsheet from './assets/spreadsheet.png'
import solitaire from './assets/solitaire.png'
import lightemall from './assets/lightemall.png'
import lightemallps from './assets/lightemall-ps.png'
import minesweeper from './assets/minesweeper.png'
import minesweeperps from './assets/minesweeper-ps.png'
import scoopsps from './assets/scoops-ps.png'
import lostspace from './assets/lostspaceps.png'
import wobl from './assets/wobl.jpeg'
import color from './assets/color.jpeg'
import borderless from './assets/borderless.jpg'
import jisshuu from './assets/jisshuu.png'
import goodgreen from './assets/goodgreen-ps.png'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faGraduationCap)

export default class App extends Component {

  render() {
    let width = window.innerWidth;
    if(width > 768) {
      return(
        <div>
          <Router>
          <div className="App">
            <SideBar />
            <NavBar />
            <Route exact path="/">
            <About />
            </Route>
            <Route exact path="/projects">
                <Projects />
            </Route>
            <Route exact path="/work">
              <Work />
            </Route>
            <Route exact path="/photography">
              <Photography />
              </Route>
            <Route path="/refs">
              <Refs />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route exact path="/projects/spreadsheet">
              <Details
                title="Projects"
                name="Spreadsheet Application"
                image={spreadsheet}
                devTitle1="Class"
                dev1Item1="Object Oriented Design"
                dev1Item2=""
                devTitle2="Frameworks"
                dev2Item1="MVC Architecture"
                dev2Item2="Swing"
                devTitle3="Language"
                dev3Item1="Java"
                dev3Item2=""
                description1="As part of my Object Oriented Design class, I worked with a partner to design a fully editable spreadsheet. We started with designing the model. We were given the data types we would have to work with, and a S-Expression parser, but had to integrate the parser with the raw data we were given, properly formatting it through the use of a number of visitors to make the data useful. We then designed a Controller and View, using Java’s Swing GUI framework."
                description2="Some features of our program are infinite scrolling, modular row and column size, recursive data detection, and the ability to add up all the cells of a rectangular selection.  I struggled the most with wrapping my head around the best way to represent all the different types of data we were working with efficiently. I did a lot of the GUI work and had a fun time learning the intricacies of Swing and gained valuable experience with using Frameworks in development."
              />
            </Route>
            <Route exact path="/projects/solitaire">
              <Details
                title="Projects"
                name="Pyramid Solitaire"
                image={solitaire}
                devTitle1="Class"
                dev1Item1="Object Oriented Design"
                dev1Item2=""
                devTitle2="Frameworks"
                dev2Item1="MVC Architecture"
                dev2Item2="Synchonous Design"
                devTitle3="Language"
                dev3Item1="Java"
                dev3Item2=""
                description1="The first project for my Object Oriented Design class was to make a working game of pyramid solitaire. It involved asynchronous play and communication through the terminal. This was my first introduction to the principles of MVC and Object-Oriented programming. I worked on this project solo and faced a number of difficulties. One of the design mistakes I made was organizing the pyramid as a 1D array, as I thought this would make it easier to test. I failed to fit the data to how the final product would appear, "
                description2="instead of designing the data around what I thought would be simplest. I did manage to fix my mistake and complete a working game of regular pyramid solitaire, I also implemented modified models to allow for playing tri-peaks, where there are three overlapping triangles (pictured above), and relaxed pyramid solitaire, which allows for removing overlapping cards that add to 13 if only one card is overlapping. These different versions extended the original Pyramid Solitaire class, only overriding methods that needed to be changed. "
              />
            </Route>
            <Route exact path="/projects/lightemall">
              <Details
                title="Projects"
                name="Light Em All Game"
                image={lightemallps}
                devTitle1="Class"
                dev1Item1="Fundamentals Of Computer Science 2"
                dev1Item2=""
                devTitle2="Methods"
                dev2Item1="Kruskal's and Prim's Algorithm"
                dev2Item2="BFS/DFS"
                devTitle3="Language"
                dev3Item1="Java"
                dev3Item2=""
                description1="The final project for Fundamentals of Computer Science 2 was Light Em All, a game where you could rotate tiles to form paths that light travels on. To win, you need to solve the tile puzzle and then move the light to the right position to 'light them all'. This project expanded upon the tiles that Minesweeper introduced while adding some tricky new elements. We had to have a number of different versions of the game, one using a predefined grid pattern, one using a fractal pattern, and the final one using Kruskal's algorithm to form a random grid that reaches all squares and forms no loops. "
                description2="This was my first time working with a minimum spanning tree algorithm, and it was tricky to understand the implementation technique conceptually and connect it to the way our tiles generate. My partner and I also had a hard time understanding how to calculate the 'diameter' of the board, the longest distance that can be traveled, in order to determine whether the player won. We were able to do this by writing a breadth-first search algorithm. We leveraged an extra credit opportunity to add a main menu, a color gradient for the light, keyboard commands, and a scoring system. "
              />
            </Route>
            <Route exact path="/projects/minesweeper">
              <Details
                title="Projects"
                name="Minesweeper Game"
                image={minesweeperps}
                devTitle1="Class"
                dev1Item1="Fundamentals Of Computer Science 2"
                dev1Item2=""
                devTitle2="Methods"
                dev2Item1="Generic Data Types"
                dev2Item2="Recursion"
                devTitle3="Language"
                dev3Item1="Java"
                dev3Item2=""
                description1="In Fundamentals of Computer Science 2, my partner and I were tasked to create the popular game Minesweeper in Java. We had to figure out how to represent grid data, how to randomly populate it with bombs, how to flood fill when a clicked square has no neighbors that are bombs, how to handle winning, losing, and flagging, among other challenges. This was our first large-scale project, and we had to handle interactions between numerous methods. We used the impWorld library, "
                description2=" which handled things like running the game for us, and we had to learn how to interact with this library for things like click handling. One part of the assignment we found difficult was given our data being structured as a 1D array, how to determine the number of neighboring mines and properly arrange the grid. If I were to do this project again, I would probably choose to have the data as a 2D array, as it more closely resembles the way the cells are supposed to be positioned in the game. "
              />
            </Route>
            <Route exact path="/projects/scoops">
              <Details
                title="Projects"
                name="Scoops Game"
                image={scoopsps}
                devTitle1="Team"
                dev1Item1="Peach Beach Studios"
                dev1Item2=""
                devTitle2="Status"
                dev2Item1="Ongoing"
                dev2Item2=""
                devTitle3="Technologies"
                dev3Item1="Unity"
                dev3Item2="C#"
                description1="Scoops is an arcade game combining the bubble popping genre with wordplay, and is the first game by Peach Beach Studios, a game development studio I founded with five other college students. It's still in development. This was most of our first experience with game development, and my first large project using Unity, so there has been a large learning curve involved. "
                description2="One of the problems we've faced is how our game design and play-testing has aligned with our vision of the game. We have had to make a number of tweaks to the way the game plays based on internal alpha testing."
              />
            </Route>
            <Route exact path="/projects/lostspace">
              <Details
                title="Projects"
                name="Lost Space Game"
                image={lostspace}
                devTitle1="Team"
                dev1Item1="Tangent Game Studios"
                dev1Item2=""
                devTitle2="Status"
                dev2Item1="Released"
                dev2Item2=""
                devTitle3="Technologies"
                dev3Item1="Gamemaker"
                dev3Item2=""
                description1=""
                description2=""
              />
            </Route>
          </div>
          </Router>
        </div>
    );
  } else {
    return (
      <div>
        <Router>
        <div className="App">
          <NavBar />
          <h3>BOOYAH</h3>
          <SideBar />
        </div>
        </Router>
      </div>
    );
    }
  }
}
