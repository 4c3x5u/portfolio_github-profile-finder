import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';

const List = ({ name, items, viewItem }) => (
  <ListGroup className={`${name}List List`}>
    {items.map(viewItem)}
  </ListGroup>
);

List.propTypes = {
  name: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array.isRequired,
  viewItem: PropTypes.func.isRequired,
};

export default List;
