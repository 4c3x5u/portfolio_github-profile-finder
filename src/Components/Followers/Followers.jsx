import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import followersAPI from '../../API/followersAPI';
import FollowersSuccess from './FollowersSuccess';
import FollowersFailure from './FollowersFailure';
import SubpageHeader from '../Shared/SubpageHeader';

const Followers = () => {
  const { login } = useParams();
  const [followers, setFollowers] = useState([]);
  const [followersFound, setFollowersFound] = useState(false);
  useEffect(() => followersAPI.get(login, setFollowers, setFollowersFound), []);
  return (
    <div className="Followers">
      <SubpageHeader subpage="Followers" />
      {followersFound
        ? <FollowersSuccess followers={followers} />
        : <FollowersFailure />}
    </div>
  );
};

export default Followers;
