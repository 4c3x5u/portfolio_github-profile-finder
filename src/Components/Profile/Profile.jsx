import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../Shared/Section';
import userAPI from '../../API/userAPI';
import ProfileFound from './ProfileFound';
import './Profile.sass';

const Profile = () => {
  const { login } = useParams();
  return (
    <Section
      title={`@${login}`}
      href={`https://www.github.com/${login}`}
      api={userAPI}
      viewList={(user) => <ProfileFound user={user} />}
      hasFooter={false}
    />
  );
};

export default Profile;
