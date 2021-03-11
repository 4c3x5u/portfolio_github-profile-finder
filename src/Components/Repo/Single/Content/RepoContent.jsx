import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

const RepoContent = ({ content }) => (
  <ListGroup className="RepoContent">
    {content.map((blob) => (
      <ListGroup.Item className="Blob text-center mb-2">
        <h5 className="Name">{blob.name}</h5>
      </ListGroup.Item>
    ))}

  </ListGroup>
);

RepoContent.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.objectOf({
      name: PropTypes.string.isRequired,
      // url: PropTypes.string.isRequired,
      // size: PropTypes.number.isRequired,
      // type: PropTypes.string.isRequired,
      // children: PropTypes.array.isRequired,
    }).isRequired,
  ).isRequired,
};

export default RepoContent;
