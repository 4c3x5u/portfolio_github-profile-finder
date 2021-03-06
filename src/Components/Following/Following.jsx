import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import followingAPI from '../../API/followingAPI';
import Spinner from '../Shared/Spinner/Spinner';
import FollowingSuccess from './FollowingSuccess';
import FollowingFailure from './FollowingFailure';
import SubpageHeader from '../Shared/SubpageHeader';

const Following = () => {
  const { login } = useParams();
  const [loading, setLoading] = useState(true);
  const [followingFound, setFollowingFound] = useState(false);
  const [following, setFollowing] = useState([]);

  useEffect(
    () => followingAPI.get(login, setLoading, setFollowingFound, setFollowing),
    [],
  );

  const followingHeader = () => (<SubpageHeader subpage="Following" />);

  const followingContent = () => {
    if (loading) { return (<Spinner />); }
    if (followingFound) { return (<FollowingSuccess following={following} />); }
    return (<FollowingFailure />);
  };

  return (
    <div className="Following">
      {followingHeader()}
      {followingContent()}
    </div>
  );
};

export default Following;
