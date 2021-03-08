import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../Shared/Section';
import followersAPI from '../../API/followersAPI';
import FollowersFound from './FollowersFound';

const Followers = () => {
  const { login } = useParams();
  return (
    <Section
      title="Followers"
      api={followersAPI}
      href={`https://www.github.com/${login}?tab=followers`}
      renderFound={(followers) => <FollowersFound followers={followers} />}
      hasFooter
    />
  );
};

export default Followers;
