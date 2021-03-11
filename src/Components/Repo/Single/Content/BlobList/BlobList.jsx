import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import Blob from './Blob/Blob';

const BlobList = ({ content }) => {
  const orderedContent = content.sort().sort((blob) => blob.type !== 'dir');
  return (
    <ListGroup className="SectionList">
      {orderedContent.map((blob) => <Blob blob={blob} />)}
    </ListGroup>
  );
};

BlobList.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.objectOf({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      children: PropTypes.array.isRequired,
    }).isRequired,
  ).isRequired,
};

export default BlobList;
