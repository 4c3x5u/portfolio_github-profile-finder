import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import userAPI from '../../API/userAPI';
import PageHeader from '../Shared/PageHeader/PageHeader';
import Loader from '../Shared/Loader/Loader';
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

  const userHeader = () => <PageHeader title={`@${login}`} />;

  const userContent = () => {
    if (loading) { return <Loader />; }
    if (userFound) { return <UserFound user={user} />; }
    return <UserNotFound />;
  };

  return (
    <div className="User" style={{ minHeight: '18rem' }}>
      {userHeader()}
      {userContent()}
    </div>
  );
};

export default User;
