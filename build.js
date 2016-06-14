import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import Home from './modules/Home'
import Instructors from './modules/Instructors'


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/home" component={Home}/>
      <Route path="/instructors" component={Instructors}/>
    </Route>
  </Router>
), document.getElementById('app'))
