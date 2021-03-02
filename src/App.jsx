import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchForm from './Components/SearchForm';
import UserDetails from './Components/UserDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.sass';

const App = () => {
  const [searchParam, setSearchParam] = useState('4c3x5u');
  const [userFound, setUserFound] = useState(false);
  const [user, setUser] = useState({
    name: '',
    bio: '',
    location: '',
    avatar: '',
    numberOfPublicRepos: 0,
    numberOfPublicGists: 0,
    numberOfFollowers: 0,
    numberOfFollowing: 0,
  });

  return (
    <Container className="App">
      <Row>
        <Col>
          <h2 className="text-dark">GitHub Profile Finder</h2>
        </Col>
        <Col xs={4}>
          <SearchForm
            setSearchParam={setSearchParam}
            setUserFound={setUserFound}
            setUserDetails={setUser}
            searchParam={searchParam}
          />
        </Col>
      </Row>

      {userFound && <UserDetails user={user} />}
    </Container>
  );
};

export default App;
