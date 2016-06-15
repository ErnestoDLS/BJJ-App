import React from 'react'
import { Link } from 'react-router'


export default React.createClass({
  render() {
    return (
      <div>
        <h1 className="heading">Jiu-Jits App!</h1>
        <ul role="nav">
          <li className="nav__top"><Link to="/home" activeClassName="active">Home</Link></li>
          <li className="nav__top"><Link to="/about" activeClassName="active">About</Link></li>
        </ul>
        <section className="container">
            <li>
              <div className="image__box">
                <Link className="image__link" to="/about">Click</Link>
                <img className="school__logo" type="image" src='../modules/images/rpbjj-logo.jpg' />
                <button type="button">Join</button>
              </div>
            </li>
            <li>
              <div className="image__box">
                <Link className="image__link" to="/about">Click</Link>
                  <img className="school__logo" type="image" src='../modules/images/teamshark-logo.jpg' />
                  <button type="button">Join</button>
              </div>
            </li>
        </section>

        {this.props.children}

      </div>
    )
  }
})
