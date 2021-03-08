import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';

const List = ({ name, items, viewSingle }) => (
  <ListGroup className={`${name}List List`}>
    {items.map(viewSingle)}
  </ListGroup>
);

List.propTypes = {
  name: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array.isRequired,
  viewSingle: PropTypes.func.isRequired,
};

export default List;
