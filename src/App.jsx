import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import AppHeader from './Components/AppHeader/AppHeader';
import Profile from './Components/Profile/Profile';
import RepoList from './Components/Repo/List/RepoList';
import Repo from './Components/Repo/Single/Repo';
import GistList from './Components/Gist/GistList';
import FollowerList from './Components/Follower/FollowerList';
import FollowingList from './Components/Following/FollowingList';
import Footer from './Components/AppFooter/AppFooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.sass';

const App = () => (
  <Container className="App">
    <Router>
      <AppHeader />
      <Route path="/:login">
        <Profile />
        <Route exact path="/:login/repos" component={RepoList} />
        <Route exact path="/:login/repos/:name" component={Repo} />
        <Route exact path="/:login/gists" component={GistList} />
        <Route exact path="/:login/followers" component={FollowerList} />
        <Route exact path="/:login/following" component={FollowingList} />
      </Route>
      <Footer />
    </Router>
  </Container>
);

export default App;
