import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';

const FollowersSingle = ({ follower }) => (
  <ListGroup.Item
    action
    className="FollowersSingle bg-light text-center mb-2"
    style={{ border: '2px solid #343a40', paddingTop: '1.2rem' }}
  >
    <h5>{follower.login}</h5>
  </ListGroup.Item>
);

FollowersSingle.propTypes = {
  follower: PropTypes.objectOf({
    login: PropTypes.string.isRequired,
  }).isRequired,
};

export default FollowersSingle;
