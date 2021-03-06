import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ControlBar from './Components/ControlBar/ControlBar';
import User from './Components/User/User';
import Repos from './Components/Repos/Repos';
import Gists from './Components/Gists/Gists';
import Following from './Components/Following/Following';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.sass';

const App = () => (
  <Container className="App">
    <Router>
      <ControlBar />
      <Route path="/:login">
        <User />
        <Switch>
          <Route path="/:login/repos" component={Repos} />
          <Route path="/:login/gists" component={Gists} />
          <Route path="/:login/following" component={Following} />
        </Switch>
      </Route>
    </Router>

  </Container>
);

export default App;
