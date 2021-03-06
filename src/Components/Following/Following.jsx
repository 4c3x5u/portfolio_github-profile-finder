import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import followingAPI from '../../API/followingAPI';
import FollowingSuccess from './FollowingSuccess';
// import FollowingFailure from './FollowingFailure';

const Following = () => {
  const { login } = useParams();
  const [following, setFollowing] = useState([]);
  const [followingFound, setFollowingFound] = useState(false);
  useEffect(() => followingAPI.get(login, setFollowing, setFollowingFound), []);
  return (
    followingFound
      ? <FollowingSuccess following={following} />
      : <h1>Following Not Found</h1> // TODO: Replace this with <FollowingFailure />
  );
};

export default Following;
