import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1 className="heading">Jiu-Jits App!</h1>
        <ul role="nav">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/instructors">Instructors</Link></li>
        </ul>
          <img type="image" onClick="DoSomething" src={'http://rodrigopinheirobjj.com/wp-content/uploads/2015/06/rp_bjj_academy_01.jpg'} />
          <img src={'http://www.teamsharkbjj.com/wp-content/uploads/2015/12/12341098_857432434354480_1637971756259014799_n.jpg'} />

        {this.props.children}

      </div>
    )
  }
})
