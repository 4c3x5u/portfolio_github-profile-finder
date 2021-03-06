import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import followingAPI from '../../API/followingAPI';
import FollowingSuccess from './FollowingSuccess';
import FollowingFailure from './FollowingFailure';
import SubpageHeader from '../Shared/SubpageHeader';

const Following = () => {
  const { login } = useParams();
  const [following, setFollowing] = useState([]);
  const [followingFound, setFollowingFound] = useState(false);
  useEffect(() => followingAPI.get(login, setFollowing, setFollowingFound), []);
  return (
    <div className="Following">
      <SubpageHeader subpage="Following" />
      {followingFound
        ? <FollowingSuccess following={following} />
        : <FollowingFailure />}
    </div>
  );
};

export default Following;
