import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import followersAPI from '../../API/followersAPI';
import FollowersSuccess from './FollowersSuccess';
import FollowersFailure from './FollowersFailure';
import SubpageHeader from '../Shared/SubpageHeader';
import Spinner from '../Shared/Spinner/Spinner';

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
    if (loading) { return <Spinner />; }
    if (followersFound) { return <FollowersSuccess followers={followers} />; }
    return <FollowersFailure />;
  };

  return (
    <div className="Followers">
      {followersHeader()}
      {followersContent()}
    </div>
  );
};

export default Followers;
