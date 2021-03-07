import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import AppHead from './Components/AppHead/AppHead';
import Profile from './Components/Profile/Profile';
import Repos from './Components/Repos/Repos';
import Gists from './Components/Gists/Gists';
import Followers from './Components/Followers/Followers';
import Following from './Components/Following/Following';
import Footer from './Components/Shared/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.sass';

const App = () => (
  <Container className="App">
    <Router>
      <AppHead />
      <Route path="/:login">
        <Profile />
        <Switch>
          <Route exact path="/:login/repos" component={Repos} />
          <Route exact path="/:login/gists" component={Gists} />
          <Route exact path="/:login/followers" component={Followers} />
          <Route exact path="/:login/following" component={Following} />
          <Route path="/:login" component={Footer} />
        </Switch>
      </Route>
    </Router>

  </Container>
);

export default App;
