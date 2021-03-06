import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';
import FollowingUser from './FollowingUser';

const FollowingSuccess = ({ following }) => (
  <ListGroup>
    {following.map((user) => (
      <FollowingUser user={user} />
    ))}
  </ListGroup>
);

FollowingSuccess.propTypes = {
  following: PropTypes.arrayOf(
    PropTypes.objectOf({
      login: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FollowingSuccess;
