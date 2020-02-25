import React from 'react';

import Welcome from './pages/welcome';
import NotFound from './pages/notFound';
import Home from './pages/home';
import Login from './pages/login';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

export default function App() {

  return (
    <Router>
    <Switch>
        <Route exact path="/">
          <Redirect to="/welcome"></Redirect>
        </Route>
        <Route path="/welcome" component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
    </Switch>
    </Router>
  );
}