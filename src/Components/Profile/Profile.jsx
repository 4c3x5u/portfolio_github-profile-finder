import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../Shared/Section';
import userAPI from '../../API/userAPI';
import ProfileView from './ProfileView';
import './Profile.sass';

const Profile = () => {
  const { login } = useParams();
  return (
    <Section
      name={`@${login}`}
      href={`https://www.github.com/${login}`}
      api={userAPI}
      view={(user) => <ProfileView user={user} />}
      hasFooter={false}
    />
  );
};

export default Profile;
