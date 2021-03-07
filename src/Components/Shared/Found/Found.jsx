/* eslint-disable react/forbid-prop-types */
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';

const Found = ({ page, items, renderItem }) => (
  <ListGroup className={`${page}Found`}>
    {items.map((item) => (renderItem(item)))}
  </ListGroup>
);

Found.propTypes = {
  page: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default Found;
