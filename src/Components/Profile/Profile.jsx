import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import userAPI from '../../API/userAPI';
import Subheader from '../Shared/Subheader/Subheader';
import Searching from '../Shared/Searching/Searching';
import ProfileFound from './ProfileFound';
import ProfileNotFound from './ProfileNotFound';

const Profile = () => {
  const { login } = useParams();
  const [searching, setSearching] = useState(false);
  const [found, setFound] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    setSearching(true);
    userAPI.search(login, setSearching, setFound, setUser);
  }, [login]);

  const profileHeader = () => <Subheader title={`@${login}`} />;

  const profileContent = () => {
    if (searching) { return <Searching />; }
    if (found) { return <ProfileFound user={user} />; }
    return <ProfileNotFound />;
  };

  return (
    <div className="Profile" style={{ minHeight: '28rem' }}>
      {profileHeader()}
      {profileContent()}
    </div>
  );
};

export default Profile;
