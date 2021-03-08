import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

const FollowingSingle = ({ following }) => (
  <ListGroup.Item
    action
    className="FollowingSingle bg-light text-center mb-2"
    style={{ border: '2px solid #343a40', paddingTop: '1.2rem' }}
    href={`/${following.login}`}
  >
    <h5 stlye={{ marginTop: '2rem', padding: 0 }}>
      {following.login}
    </h5>
  </ListGroup.Item>
);

FollowingSingle.propTypes = {
  following: PropTypes.objectOf({
    login: PropTypes.string.isRequired,
  }).isRequired,
};

export default FollowingSingle;
