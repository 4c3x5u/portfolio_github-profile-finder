import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  requestFollowing,
  handleFollowingFound,
  handleFollowingNotFound,
} from '../../API/FollowingAPI';
import FollowingSuccess from './FollowingSuccess';
// import FollowingFailure from './FollowingFailure';

const Following = () => {
  const { login } = useParams();
  const [following, setFollowing] = useState([]);
  const [followingFound, setFollowingFound] = useState(false);

  useEffect(() => (
    requestFollowing(
      login,
      handleFollowingFound(setFollowing, setFollowingFound),
      handleFollowingNotFound(setFollowing, setFollowingFound),
    )
  ), []);

  const view = () => (
    followingFound ? (
      <FollowingSuccess following={following} />
    ) : (
      // <FollowingFailure />
      <h1>Following Not Found</h1>
    )
  );

  return view();
};

export default Following;
