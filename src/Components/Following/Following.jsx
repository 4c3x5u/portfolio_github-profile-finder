import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';
import FollowingUser from './FollowingUser';

const Following = ({ users }) => (
  <ListGroup>
    {users.map((user) => (
      <FollowingUser user={user} />
    ))}
  </ListGroup>
);

Following.propTypes = {
  users: PropTypes.arrayOf({
    login: PropTypes.string.isRequired,
  }).isRequired,
};

export default Following;
