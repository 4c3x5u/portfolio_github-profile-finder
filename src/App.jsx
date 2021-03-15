import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import AppHeader from "./Components/AppHeader/AppHeader";
import Profile from "./Components/Profile/Profile";
import RepoList from "./Components/Repo/List/RepoList";
import Repo from "./Components/Repo/Single/Repo";
import RepoContent from "./Components/Repo/Single/Content/RepoContent";
import GistList from "./Components/Gist/List/GistList";
import GistFileList from "./Components/Gist/File/List/GistFileList";
import GistFile from "./Components/Gist/File/Single/GistFile";
import FollowerList from "./Components/Follower/FollowerList";
import FollowingList from "./Components/Following/FollowingList";
import Footer from "./Components/AppFooter/AppFooter";
import RepoFile from "./Components/Repo/Single/Content/File/Single/RepoFile";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.sass";

const App = () => (
  <Container className="App">
    <Router>
      <AppHeader />
      <Route path="/:login">
        <Profile />
        <Route exact path="/:login/repos" component={RepoList} />
        <Route path="/:login/repos/:name" component={Repo} />
        <Route path="/:login/repos/:name/content" component={RepoContent} />
        <Route path="/:login/repos/:repoName/file/:fileName" component={RepoFile} />
        <Route exact path="/:login/gists" component={GistList} />
        <Route path="/:login/gists/:id" component={GistFileList} />
        <Route path="/:login/gists/:id/:name" component={GistFile} />
        <Route exact path="/:login/followers" component={FollowerList} />
        <Route exact path="/:login/following" component={FollowingList} />
      </Route>
      <Footer />
    </Router>
  </Container>
);

export default App;
