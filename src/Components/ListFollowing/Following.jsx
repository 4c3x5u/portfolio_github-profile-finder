import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

const Following = ({ username }) => (
  <ListGroup.Item
    action
    className="bg-light text-center mb-2"
    style={{ border: '2px solid #343a40' }}
  >
    <h5>
      {username.username}
    </h5>
  </ListGroup.Item>
);

Following.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Following;
