import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

const Following = ({ user }) => (
  <ListGroup.Item
    action
    className="bg-light text-center mb-2"
    style={{ border: '2px solid #343a40' }}
  >
    <h5>
      {user.login}
    </h5>
  </ListGroup.Item>
);

Following.propTypes = {
  user: PropTypes.objectOf({
    login: PropTypes.string.isRequired,
  }).isRequired,
};

export default Following;
