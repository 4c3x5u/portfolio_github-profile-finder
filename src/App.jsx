import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Head from './Components/Head/Head';
import UserInfo from './Components/UserInfo/UserInfo';
import PublicRepos from './Components/PublicRepos/PublicRepos';
import Following from './Components/Following/Following';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.sass';

const App = () => (
  <Container className="App">
    <Router>
      <Head />
      <Route path="/:login">
        <UserInfo />
        <Switch>
          <Route path="/:login/repos" component={PublicRepos} />
          <Route path="/:login/following" component={Following} />
        </Switch>
      </Route>
    </Router>

  </Container>
);

export default App;
