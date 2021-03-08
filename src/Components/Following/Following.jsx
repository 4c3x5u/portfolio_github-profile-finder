import React from 'react';
import { useParams } from 'react-router-dom';
import followingAPI from '../../API/followingAPI';
import Section from '../Shared/Section';
import FollowingFound from './FollowingFound';

const Following = () => {
  const { login } = useParams();
  return (
    <Section
      title="Following"
      href={`https://www.github.com/${login}?tab=following`}
      api={followingAPI}
      renderFound={(following) => <FollowingFound following={following} />}
      hasFooter
    />
  );
};

export default Following;
