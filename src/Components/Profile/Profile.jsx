import React from 'react';
import { useParams } from 'react-router-dom';
import userAPI from '../../API/userAPI';
import Section from '../Shared/Section/Section';
import ProfileFound from './ProfileFound';
import ProfileNotFound from './ProfileNotFound';

const Profile = () => {
  const { login } = useParams();
  return (
    <Section
      title={`@${login}`}
      api={userAPI}
      renderFound={(user) => <ProfileFound user={user} />}
      renderNotFound={() => <ProfileNotFound />}
      hasFooter={false}
    />
  );
};

export default Profile;
