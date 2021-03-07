import React from 'react';
import followersAPI from '../../API/followersAPI';
import Section from '../Shared/Section/Section';
import FollowersFound from './FollowersFound';
import FollowersNotFound from './FollowersNotFound';

const Followers = () => (
  <Section
    title="Followers"
    api={followersAPI}
    renderFound={(followers) => <FollowersFound followers={followers} />}
    renderNotFound={() => <FollowersNotFound />}
    hasFooter
  />
);

export default Followers;
