import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './Components/Header/Header';
import User from './Components/User/User';
import Repos from './Components/Repos/Repos';
import Gists from './Components/Gists/Gists';
import Followers from './Components/Followers/Followers';
import Following from './Components/Following/Following';
import InfoModal from './Components/Shared/InfoModal/InfoModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.sass';

const App = () => (
  <Container className="App">
    <Router>
      <Header />
      <Route path="/:login">
        <InfoModal title="Modal Title" body="Modal Body" showing />
        <User />
        <Switch>
          <Route path="/:login/repos" component={Repos} />
          <Route path="/:login/gists" component={Gists} />
          <Route path="/:login/followers" component={Followers} />
          <Route path="/:login/following" component={Following} />
        </Switch>
      </Route>
    </Router>

  </Container>
);

export default App;
