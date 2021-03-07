import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import followersAPI from '../../API/followersAPI';
import Subheader from '../Shared/Subheader/Subheader';
import Searching from '../Shared/Searching/Searching';
import FollowersFound from './FollowersFound';
import FollowersNotFound from './FollowersNotFound';

const Followers = () => {
  const { login } = useParams();
  const [searching, setSearching] = useState(false);
  const [found, setFound] = useState(false);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    setSearching(true);
    followersAPI.search(login, setSearching, setFound, setFollowers);
  }, []);

  const followersHeader = () => <Subheader title="Followers" />;

  const followersContent = () => {
    if (searching) { return <Searching />; }
    if (found) { return <FollowersFound followers={followers} />; }
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
