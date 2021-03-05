import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Head from './Components/Head/Head';
import UserDetails from './Components/UserDetails/UserDetails';
import PublicRepos from './Components/PublicRepos/PublicRepos';
import ListFollowing from './Components/ListFollowing/ListFollowing';
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
    <Container className="App">
      <Head
        searchParam={searchParam}
        setSearchParam={setSearchParam}
        setUser={setUser}
        setUserFound={setUserFound}
      />

      {userFound && (
        <div>
          <UserDetails
            user={user}
            setRepos={setRepos}
            setReposFound={setReposFound}
            setFollowingUsers={setFollowingUsers}
            setFollowingUsersFound={setFollowingUsersFound}
          />
          {reposFound ? (
            <PublicRepos repos={repos} />
          ) : (
            followingUsersFound && (
              <ListFollowing followingUsers={followingUsers} />
            )
          )}
        </div>
      )}
    </Container>
  );
};

export default App;
