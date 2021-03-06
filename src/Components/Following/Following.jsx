import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import followingAPI from '../../API/followingAPI';
import Loading from '../Shared/Loading/Loading';
import FollowingFound from './FollowingFound';
import FollowingNotFound from './FollowingNotFound';
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
    if (loading) { return (<Loading />); }
    if (followingFound) { return (<FollowingFound following={following} />); }
    return (<FollowingNotFound />);
  };

  return (
    <div className="Following">
      {followingHeader()}
      {followingContent()}
    </div>
  );
};

export default Following;
