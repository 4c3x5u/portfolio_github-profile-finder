import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';

const List = ({ name, items, view }) => (
  <ListGroup className={`${name}List List`}>
    {items.map(view)}
  </ListGroup>
);

List.propTypes = {
  name: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array.isRequired,
  view: PropTypes.func.isRequired,
};

export default List;
