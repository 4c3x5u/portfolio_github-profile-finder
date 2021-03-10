import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import AppHeader from './Components/AppHeader/AppHeader';
import Profile from './Components/Profile/Profile';
import ReposList from './Components/Repos/ReposList';
import GistsList from './Components/Gists/GistsList';
import FollowersList from './Components/Followers/FollowersList';
import FollowingList from './Components/Following/FollowingList';
import SectionFooter from './Components/Shared/Section/Footer/SectionFooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.sass';

const App = () => (
  <Container className="App">
    <Router>
      <AppHeader />
      <Route path="/:login">
        <Profile />
        <Switch>
          <Route exact path="/:login/repos" component={ReposList} />
          <Route exact path="/:login/gists" component={GistsList} />
          <Route exact path="/:login/followers" component={FollowersList} />
          <Route exact path="/:login/following" component={FollowingList} />
          <Route path="/:login" component={SectionFooter} />
        </Switch>
      </Route>
    </Router>

  </Container>
);

export default App;
