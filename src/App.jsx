import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import AppHeader from './Components/AppHeader/AppHeader';
import AppHome from './Components/AppHome/AppHome';
import AppFooter from './Components/AppFooter/AppFooter';
import User from './Components/User/User';
import RepoList from './Components/RepoList/RepoList';
import Repo from './Components/RepoList/Repo/Repo';
import RepoContent from './Components/RepoList/Repo/Content/RepoContent';
import RepoFile from './Components/RepoList/Repo/Content/File/RepoFile';
import GistList from './Components/GistList/GistList';
import GistFileList from './Components/GistList/File/GistFileList';
import GistFile from './Components/GistList/File/GistFile';
import FollowerList from './Components/FollowerList';
import FollowingList from './Components/FollowingList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.sass';

const App = () => (
  <Container className="App">
    <Router>
      <AppHeader />
      <Switch>
        <Route exact path="/" component={AppHome} />
        <Route path="/:login">
          <User />
          <Switch>
            <Route exact path="/:login/repos" component={RepoList} />
            <Route path="/:login/repos/:name">
              <Repo />
              <Switch>
                <Route path="/:login/repos/:name/content" component={RepoContent} />
                <Route path="/:login/repos/:repoName/file/:fileName" component={RepoFile} />
              </Switch>
            </Route>
            <Route exact path="/:login/gists" component={GistList} />
            <Route path="/:login/gists/:id">
              <GistFileList />
              <Route exact path="/:login/gists/:id/:name" component={GistFile} />
            </Route>
            <Route exact path="/:login/followers" component={FollowerList} />
            <Route exact path="/:login/following" component={FollowingList} />
          </Switch>
        </Route>
      </Switch>
      <AppFooter />
    </Router>
  </Container>
);

export default App;
