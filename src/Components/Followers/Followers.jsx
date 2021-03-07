import React from 'react';
import { useParams } from 'react-router-dom';
import followersAPI from '../../API/followersAPI';
import Section from '../Shared/Section';
import FollowersFound from './FollowersFound';

const Followers = () => {
  const { login } = useParams();
  return (
    <Section
      title="Followers"
      api={followersAPI}
      href={`https://www.github.com/${login}/followers`}
      renderFound={(followers) => <FollowersFound followers={followers} />}
      hasFooter
    />
  );
};

export default Followers;
