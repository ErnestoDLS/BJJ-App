import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import Home from './modules/Home'
import { Link } from 'react-router'
import Gym from './modules/Gym'


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/home" component={Home}/>
    <Route path="/gym/:id" component={Gym}/>
  </Router>
), document.getElementById('app'))
