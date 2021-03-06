import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import followersAPI from '../../API/followersAPI';
import SubpageHeader from '../Shared/SubpageHeader';
import Loader from '../Shared/Loader/Loader';
import FollowersFound from './FollowersFound';
import FollowersNotFound from './FollowersNotFound';

const Followers = () => {
  const { login } = useParams();
  const [loading, setLoading] = useState(true);
  const [followersFound, setFollowersFound] = useState(false);
  const [followers, setFollowers] = useState([]);

  useEffect(
    () => followersAPI.get(login, setLoading, setFollowersFound, setFollowers),
    [],
  );

  const followersHeader = () => <SubpageHeader subpage="Followers" />;

  const followersContent = () => {
    if (loading) { return <Loader />; }
    if (followersFound) { return <FollowersFound followers={followers} />; }
    return <FollowersNotFound />;
  };

  return (
    <div className="Followers">
      {followersHeader()}
      {followersContent()}
    </div>
  );
};

export default Followers;
