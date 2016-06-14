import React from 'react'
import { Link } from 'react-router'


export default React.createClass({
  render() {
    return (
      <div>
        <h1 className="heading">Jiu-Jits App!</h1>
        <ul role="nav">
          <li className="nav__top"><Link to="/home">Home</Link></li>
          <li className="nav__top"><Link to="/about">About</Link></li>
        </ul>
        <section className="container">
            <li>
              <div className="image__text">
                <h2>Click</h2>
                <img className="school" type="image" src='../modules/images/rpbjj-logo.jpg' />
              </div>
            </li>
            <li>
              <div className="image__text">
                <h2>Click</h2>
                  <img className="shark" type="image" src='../modules/images/teamshark-logo.jpg' />
              </div>
            </li>
        </section>

        {this.props.children}

      </div>
    )
  }
})
