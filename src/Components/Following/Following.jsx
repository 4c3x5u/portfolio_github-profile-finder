import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import followingAPI from '../../API/followingAPI';
import FollowingSuccess from './FollowingSuccess';
import FollowingFailure from './FollowingFailure';

const Following = () => {
  const { login } = useParams();
  const [following, setFollowing] = useState([]);
  const [followingFound, setFollowingFound] = useState(false);
  useEffect(() => followingAPI.get(login, setFollowing, setFollowingFound), []);
  return (
    <div className="Following">
      <div
        className="FollowingHead bg-dark text-center mb-2"
        style={{
          border: '2px solid #343a40',
          padding: '1.2rem 0 0.7rem 0',
          borderRadius: '2rem 2rem 0 0',
        }}
      >
        <h5 className="text-light">Following</h5>
      </div>
      {followingFound
        ? <FollowingSuccess following={following} />
        : <FollowingFailure />}
    </div>
  );
};

export default Following;
