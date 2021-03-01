import React, { useState } from 'react';
import axios from 'axios';
import {
  Container, Row, Col, Button, Form,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.sass';

const searchUser = (searchParam, userFound, userNotFound) => (
  axios
    .get(`https://api.github.com/users/${searchParam}`)
    .then((res) => userFound(JSON.stringify(res)))
    .catch(() => userNotFound())
);

const handleUserFound = (setUserFound, setUserDetails) => (foundUserDetails) => {
  setUserFound(true);
  setUserDetails(foundUserDetails);
};

const handleUserNotFound = (setUserFound, setUserDetails) => () => {
  setUserFound(false);
  setUserDetails({});
};

const App = () => {
  const [searchParam, setSearchParam] = useState('');
  const [userFound, setUserFound] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  return (
    <div className="App">
      <Container>
        <Form>
          <Form.Group as={Row}>
            <Col xs={10}>
              <Form.Control
                type="text"
                placeholder="Enter username..."
                onChange={(e) => setSearchParam(e.target.value)}
              />
            </Col>
            <Button
              column
              xs={2}
              variant="primary"
              size="sm"
              onClick={() => searchUser(
                searchParam,
                handleUserFound(setUserFound, setUserDetails),
                handleUserNotFound(setUserFound, setUserDetails),
              )}
            >
              Search
            </Button>
          </Form.Group>
        </Form>
      </Container>
      <h1>
        Search param:
        {' '}
        {searchParam}
      </h1>
      {
        userFound && (
          <div>
            <h1>{JSON.stringify(userDetails)}</h1>
          </div>
        )
      }
    </div>
  );
};

export default App;
