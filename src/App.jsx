import React, { useState } from 'react';
import axios from 'axios';
import {
  Container, Row, Col, Button, Form,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.sass';

const searchUser = (searchParam, setUserFound, setUserDetails) => (
  axios
    .get(`https://api.github.com/users/${searchParam}`)
    .then((res) => {
      setUserFound(true);
      setUserDetails(JSON.stringify(res));
    })
    .catch(() => {
      setUserFound(false);
      setUserDetails({});
    })
);

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
              onClick={() => searchUser(searchParam, setUserFound, setUserDetails)}
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
