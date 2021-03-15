import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import AppHeader from "./Components/AppHeader/AppHeader";
import Profile from "./Components/Profile/Profile";
import RepoList from "./Components/RepoList/RepoList";
import Repo from "./Components/RepoList/Repo/Repo";
import RepoContent from "./Components/RepoList/Repo/Content/RepoContent";
import GistList from "./Components/GistList/GistList";
import GistFileList from "./Components/GistList/File/GistFileList";
import GistFile from "./Components/GistList/File/GistFile";
import FollowerList from "./Components/FollowerList";
import FollowingList from "./Components/FollowingList";
import Footer from "./Components/AppFooter/AppFooter";
import RepoFile from "./Components/RepoList/Repo/Content/File/RepoFile";
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
