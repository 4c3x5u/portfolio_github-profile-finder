import React, { useState } from 'react';
// import axios from 'axios';

import {
  Container,
  Row,
  Col,
  Button,
  Form,
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.sass';

// const getUser = (username, setUser) => (
//   axios
//     .get(
//       `https://api.github.com/users/${username}`,
//       // {
//       //   headers: {
//       //     'Iv1.8271cd34738b6ede': ' 344bf47033426193a2e377ddeba155710056035d',
//       //   },
//       // },
//     )
//     .then((res) => setUser(JSON.stringify(res)))
//     .catch((err) => setUser(JSON.stringify(err)))
// );

const App = () => {
  const [user] = useState({});

  return (
    <div className="App">
      <Container>
        <Form>
          <Form.Group as={Row}>
            <Col xs={10}>
              <Form.Control
                type="text"
                // onChange={(e) => getUser(e.target.value, setUser)}
              />
            </Col>
            <Button column xs={2} variant="primary" size="sm">Search</Button>
          </Form.Group>
        </Form>
      </Container>
      <h1>{JSON.stringify(user)}</h1>
    </div>
  );
};

export default App;
