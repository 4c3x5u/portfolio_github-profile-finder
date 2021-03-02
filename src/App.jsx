import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import SearchForm from './Components/SearchForm';
import UserDetails from './Components/UserDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.sass';

const App = () => {
  const [searchParam, setSearchParam] = useState('');
  const [userFound, setUserFound] = useState(false);
  const [user, setUser] = useState({
    name: '',
    bio: '',
    location: '',
  });

  return (
    <Container className="App">
      <SearchForm
        setSearchParam={setSearchParam}
        setUserFound={setUserFound}
        setUserDetails={setUser}
        searchParam={searchParam}
      />
      {userFound && <UserDetails user={user} />}
    </Container>
  );
};

export default App;
