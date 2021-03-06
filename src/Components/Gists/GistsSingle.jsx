import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';

const GistsSingle = ({ gist }) => (
  <ListGroup.Item
    action
    className="GistsSingle bg-light text-center mb-2"
    style={{ border: '2px solid #343a40' }}
  >
    <h5>{gist.description}</h5>
    <ul className="Files">
      {gist.files.map((file) => (
        <li>{`${file.name}, (${file.lang}) – ${file.type}`}</li>
      ))}
    </ul>
  </ListGroup.Item>
);

GistsSingle.propTypes = {
  gist: PropTypes.objectOf({
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    files: PropTypes.arrayOf(
      PropTypes.objectOf({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        lang: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

export default GistsSingle;
