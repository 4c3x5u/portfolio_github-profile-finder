import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';
import Following from './Following';

const ListFollowing = ({ followingUsers }) => (
  <ListGroup>
    {followingUsers.map((user) => (
      <Following user={user} />
    ))}
  </ListGroup>
);

ListFollowing.propTypes = {
  followingUsers: PropTypes.arrayOf({
    login: PropTypes.string.isRequired,
  }).isRequired,
};

export default ListFollowing;
