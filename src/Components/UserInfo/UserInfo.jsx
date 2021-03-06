/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import userAPI from '../../API/userAPI';
import UserInfoSuccess from './UserInfoSuccess';
// import UserInfoFailure from './UserInfoFailure';

const UserInfo = () => {
  const { login } = useParams();
  const [user, setUser] = useState({});
  const [userFound, setUserFound] = useState(false);
  useEffect(() => userAPI.get(login, setUser, setUserFound), []);
  return (
    userFound
      ? <UserInfoSuccess user={user} />
      : <h1>User Not Found</h1> // TODO: Replace this with <UserInfoFailure />
  );
};

export default UserInfo;
