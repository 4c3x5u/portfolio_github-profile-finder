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
  const [user, setUser] = useState({});
  const [userFound, setUserFound] = useState(false);
  const [repos, setRepos] = useState([]);
  const [reposFound, setReposFound] = useState(false);
  const [followingUsers, setFollowingUsers] = useState(false);
  const [followingUsersFound, setFollowingUsersFound] = useState(false);

  return (
    <Router>
      <Container className="App">
        <Head
          searchParam={searchParam}
          setSearchParam={setSearchParam}
          setUser={setUser}
          setUserFound={setUserFound}
        />

        {userFound && (
          <div>
            <UserInfo
              user={user}
              setRepos={setRepos}
              setReposFound={setReposFound}
              setFollowingUsers={setFollowingUsers}
              setFollowingUsersFound={setFollowingUsersFound}
            />

            <Switch>
              <Route path="/*/repos">
                {reposFound && <PublicRepos repos={repos} />}
              </Route>
              <Route path="/*/following">
                {followingUsersFound && <Following users={followingUsers} />}
              </Route>
            </Switch>
          </div>
        )}
      </Container>
    </Router>
  );
};

export default App;
