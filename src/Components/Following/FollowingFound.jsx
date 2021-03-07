import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';
import FollowingSingle from './FollowingSingle';

const FollowingFound = ({ following }) => (
  <ListGroup className="FollowingSuccess">
    {following.map((user) => (
      <FollowingSingle following={user} />
    ))}
  </ListGroup>
);

FollowingFound.propTypes = {
  following: PropTypes.arrayOf(
    PropTypes.objectOf({
      login: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FollowingFound;
