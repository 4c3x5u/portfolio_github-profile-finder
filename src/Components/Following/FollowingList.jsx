import React from 'react';
import PropTypes from 'prop-types';
import FollowingSingle from './FollowingSingle';
import List from '../Shared/List/List';

const FollowingList = ({ following }) => (
  <List
    name="Following"
    items={following}
    viewSingle={(user) => <FollowingSingle following={user} />}
  />
);

FollowingList.propTypes = {
  following: PropTypes.arrayOf(
    PropTypes.objectOf({
      login: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FollowingList;
