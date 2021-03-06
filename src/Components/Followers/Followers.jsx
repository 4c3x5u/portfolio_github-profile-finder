import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import followersAPI from '../../API/followersAPI';
import FollowersSuccess from './FollowersSuccess';

const Followers = () => {
  const { login } = useParams();
  const [followers, setFollowers] = useState([]);
  const [followersFound, setFollowersFound] = useState(false);
  useEffect(() => followersAPI.get(login, setFollowers, setFollowersFound), []);
  return (
    followersFound
      ? <FollowersSuccess followers={followers} />
      : <h1>Followers not found.</h1> // TODO: Replace this with <PublicReposFailure />
  );
};

export default Followers;
