import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Head from './Components/Head/Head';
import UserInfo from './Components/UserInfo/UserInfo';
import PublicRepos from './Components/PublicRepos/PublicRepos';
import Following from './Components/Following/Following';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.sass';

const App = () => {
  const [searchParam, setSearchParam] = useState('4c3x5u');
  const [repos, setRepos] = useState([]);
  const [followingUsers, setFollowingUsers] = useState(false);

  return (
    <Router>
      <Container className="App">
        <Head
          searchParam={searchParam}
          setSearchParam={setSearchParam}
        />
        <Switch>
          <Route path="/:id">
            <UserInfo
              setRepos={setRepos}
              setFollowingUsers={setFollowingUsers}
            />
            <Switch>
              <Route path="/:id/repos">
                <PublicRepos repos={repos} />
              </Route>
              <Route path="/:id/following">
                <Following users={followingUsers} />
              </Route>
            </Switch>
          </Route>
        </Switch>

      </Container>
    </Router>
  );
};

export default App;
