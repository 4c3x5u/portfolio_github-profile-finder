import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../Shared/Section/Section';
import userAPI from '../../API/userAPI';
import ProfileBody from './Body/ProfileBody';

const Profile = () => {
  const { login } = useParams();
  return (
    <Section
      name={`@${login}`}
      href={`https://www.github.com/${login}`}
      api={userAPI}
      view={(user) => <ProfileBody user={user} />}
      hasFooter={false}
    />
  );
};

export default Profile;
