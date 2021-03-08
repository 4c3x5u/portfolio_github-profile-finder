import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';

const Single = ({ newTabOnClick, section, item }) => (
  <ListGroup.Item
    className={`${section}Single Single bg-light text-center mb-2`}
    action
    href={item.url}
    target={newTabOnClick ? '_blank' : ''}
    rel={newTabOnClick ? 'noreferrer' : ''}
    style={{ border: '2px solid #343a40' }}
  >
    <h5 className="my-0">
      {item.name}
    </h5>
  </ListGroup.Item>
);

Single.propTypes = {
  newTabOnClick: PropTypes.bool,
  section: PropTypes.string.isRequired,
  item: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

Single.defaultProps = { newTabOnClick: false };

export default Single;
