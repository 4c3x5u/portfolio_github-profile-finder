import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import followersAPI from '../../API/followersAPI';
import FollowersSuccess from './FollowersSuccess';
import FollowersFailure from './FollowersFailure';

const Followers = () => {
  const { login } = useParams();
  const [followers, setFollowers] = useState([]);
  const [followersFound, setFollowersFound] = useState(false);
  useEffect(() => followersAPI.get(login, setFollowers, setFollowersFound), []);
  return (
    followersFound
      ? <FollowersSuccess followers={followers} />
      : <FollowersFailure />
  );
};

export default Followers;
