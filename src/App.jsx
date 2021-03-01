import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { viewSearchFormGroup, viewUserDetails } from './views';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.sass';

const App = () => {
  const [searchParam, setSearchParam] = useState('');
  const [userFound, setUserFound] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: '',
  });

  return (
    <Container className="App">
      {console.log(`Search param: ${searchParam}`)}
      {console.log(`User details: ${JSON.stringify(userDetails)}`)}
      <Form onSubmit={(e) => e.preventDefault()}>
        {viewSearchFormGroup(setSearchParam, setUserFound, setUserDetails, searchParam)}
      </Form>
      {userFound && viewUserDetails(userDetails)}
    </Container>
  );
};

export default App;
