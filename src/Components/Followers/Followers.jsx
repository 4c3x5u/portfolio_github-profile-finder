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
    <div className="Followers">
      <div
        className="FollowersHeader bg-dark text-center mb-2"
        style={{
          border: '2px solid #343a40',
          padding: '1.2rem 0 0.7rem 0',
          borderRadius: '2rem 2rem 0 0',
        }}
      >
        <h5 className="text-light">Followers</h5>
      </div>

      {followersFound
        ? <FollowersSuccess followers={followers} />
        : <FollowersFailure />}
    </div>
  );
};

export default Followers;
