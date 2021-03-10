import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../Shared/Section/Section';
import ProfileBody from './Body/ProfileBody';
import getUser from '../../API/user/getUser';

const Profile = () => {
  const { login } = useParams();
  return (
    <Section
      name={`@${login}`}
      href={`https://www.github.com/${login}`}
      get={getUser}
      view={(user) => <ProfileBody user={user} />}
      hasFooter={false}
    />
  );
};

export default Profile;
