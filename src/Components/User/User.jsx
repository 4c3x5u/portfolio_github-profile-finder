/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import userAPI from '../../API/userAPI';
import UserSuccess from './UserSuccess';
// import UserInfoFailure from './UserInfoFailure';

const User = () => {
  const { login } = useParams();
  const [user, setUser] = useState({});
  const [userFound, setUserFound] = useState(false);
  useEffect(() => userAPI.get(login, setUser, setUserFound), []);
  return (
    userFound
      ? <UserSuccess user={user} />
      : <h1>User Not Found</h1> // TODO: Replace this with <UserInfoFailure />
  );
};

export default User;
