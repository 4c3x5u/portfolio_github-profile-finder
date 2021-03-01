import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { viewSearchFormGroup, viewUserDetails } from './views';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.sass';

const App = () => {
  const [searchParam, setSearchParam] = useState('');
  const [userFound, setUserFound] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  return (
    <div className="App">
      <Container>
        <Form>
          {viewSearchFormGroup(setSearchParam, setUserFound, setUserDetails, searchParam)}
        </Form>
      </Container>
      {userFound && viewUserDetails(userDetails)}
    </div>
  );
};

export default App;
