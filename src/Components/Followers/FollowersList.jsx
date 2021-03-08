import React from 'react';
import PropTypes from 'prop-types';
import FollowersSingle from './FollowersSingle';
import List from '../Shared/List/List';

const FollowersList = ({ followers }) => (
  <List
    name="Followers"
    items={followers}
    viewSingle={(follower) => <FollowersSingle follower={follower} />}
  />
);

FollowersList.propTypes = {
  followers: PropTypes.arrayOf(
    PropTypes.objectOf({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FollowersList;
