import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import userAPI from '../../API/userAPI';
import Loading from '../Shared/Loading/Loading';
import UserFound from './UserFound';
import UserNotFound from './UserNotFound';

const User = () => {
  const { login } = useParams();
  const [loading, setLoading] = useState(true);
  const [userFound, setUserFound] = useState(false);
  const [user, setUser] = useState({});

  useEffect(
    () => userAPI.get(login, setLoading, setUserFound, setUser),
    [login],
  );

  const viewUser = () => {
    if (loading) { return <Loading />; }
    if (userFound) { return <UserFound user={user} />; }
    return <UserNotFound />;
  };

  return viewUser();
};

export default User;
