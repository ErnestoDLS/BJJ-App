import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

export default React.createClass({
  getDefaultProps(){
    return {
      rpbjj: {
        name: "Rodrigo Pinheiro",
        classes: [
          {
            name: "Bjj Fundamentals",
            length: 20,
            description: "This is where to start if you have no idea what BJJ is"
          },
          {
            name: "Advanced Bjj",
            length: 20,
            description: "This is the next step for you!",
            vidoes: [
              {
                name: "Attacking the turtle",
                url: "https://www.youtube.com/watch?v=bql8UNTyDFY"
              },
              {
                name: "Leg Lasso Spider Guard Smash Pass",
                url: "https://www.youtube.com/watch?v=yF3_FsKMUYM"
              }
            ]
          }
        ],
        location: "4563 N. Loop 1604 W. Suite 1215 San Antonio, TX 78249"
      },
      teamshark: {
        name: "Team Shark",
        classes: [
          {
            name: "Beginner's Bjj",
            length: 20,
            description: "Bjj for beginners",
            videos: [
              {
                name: "Pass the guard",
                url: "https://www.youtube.com/watch?v=z42ZZ5IvS14"
              },
              {
                name: "Guard Pass 101",
                url: "https://www.youtube.com/watch?v=X3VVVeobzc8"
              },
              {
                name: "Transition from Side Control to Mount",
                url: "https://www.youtube.com/watch?v=3Lda2u99r_o"
              }
            ]
          },
          {

          }

        ],
        location: "2211 NW Military Hwy #126, San Antonio, TX 78213"
      }
    }
  },
  render(){
    return(
      <article>
        <h2>this.props[this.props.params.id].name</h2>
        {
          this.props[this.props.params.id].classes.map((clas) => {
            return <li>
              <h3>clas.name</h3>
              // this.props.[this.props.id].classes.videos.map((videos) => {
              //   return <h3>clas.videos</h3>
              //   
              })
            </li>
          })
        }
      </article>
    );
  }
});
