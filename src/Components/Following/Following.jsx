import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import followingAPI from '../../API/followingAPI';
import Subheader from '../Shared/Subheader/Subheader';
import Searching from '../Shared/Searching/Searching';
import FollowingFound from './FollowingFound';
import FollowingNotFound from './FollowingNotFound';

const Following = () => {
  const { login } = useParams();
  const [searching, setSearching] = useState(true);
  const [found, setFound] = useState(false);
  const [following, setFollowing] = useState([]);

  useEffect(
    () => followingAPI.search(login, setSearching, setFound, setFollowing),
    [],
  );

  const followingHeader = () => (<Subheader title="Following" />);

  const followingContent = () => {
    if (searching) { return (<Searching />); }
    if (found) { return (<FollowingFound following={following} />); }
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
