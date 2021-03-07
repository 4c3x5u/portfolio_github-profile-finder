import React from 'react';
import followingAPI from '../../API/followingAPI';
import Section from '../Shared/Section/Section';
import FollowingFound from './FollowingFound';
import FollowingNotFound from './FollowingNotFound';

const Following = () => (
  <Section
    title="Following"
    api={followingAPI}
    renderFound={(following) => <FollowingFound following={following} />}
    renderNotFound={() => <FollowingNotFound />}
  />
);

export default Following;
