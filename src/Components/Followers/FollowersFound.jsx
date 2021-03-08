import React from 'react';
import PropTypes from 'prop-types';
import FollowersSingle from './FollowersSingle';
import List from '../Shared/List/List';

const FollowersFound = ({ followers }) => (
  <List
    name="Followers"
    items={followers}
    viewSingle={(follower) => <FollowersSingle follower={follower} />}
  />
);

FollowersFound.propTypes = {
  followers: PropTypes.arrayOf(
    PropTypes.objectOf({
      login: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FollowersFound;
