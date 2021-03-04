import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';
import Following from './Following';

// TODO: followingUsers being passed to this comes in empty. Check it out.
const ListFollowing = ({ followingUsers }) => (
  <ListGroup>
    {followingUsers.map((user) => (
      <Following key={user.login} user={user} />
    ))}
  </ListGroup>
);

ListFollowing.propTypes = {
  followingUsers: PropTypes.arrayOf({
    login: PropTypes.string.isRequired,
  }).isRequired,
};

export default ListFollowing;
