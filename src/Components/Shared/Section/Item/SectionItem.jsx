import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';
import './SectionItem.sass';

const SectionItem = ({ item, newTabOnClick }) => (
  <ListGroup.Item
    className="SectionItem bg-light text-center mb-2"
    action
    href={item.url}
    target={newTabOnClick ? '_blank' : ''}
    rel={newTabOnClick ? 'noreferrer' : ''}
  >
    <h5 className="ItemName">
      {item.name}
    </h5>
  </ListGroup.Item>
);

SectionItem.propTypes = {
  newTabOnClick: PropTypes.bool,
  item: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

SectionItem.defaultProps = { newTabOnClick: false };

export default SectionItem;
