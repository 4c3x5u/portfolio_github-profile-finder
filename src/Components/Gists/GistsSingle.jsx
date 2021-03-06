import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';

const GistsSingle = ({ gist }) => (
  <ListGroup.Item
    action
    className="GistsSingle bg-light text-center mb-2"
    style={{ border: '2px solid #343a40', padding: '1rem 0 0 0' }}
  >
    <p style={{ fontSize: '13pt' }}>{gist.description}</p>
  </ListGroup.Item>
);

GistsSingle.propTypes = {
  gist: PropTypes.objectOf({
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default GistsSingle;
