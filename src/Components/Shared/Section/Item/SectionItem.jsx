import React from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';
import './SectionItem.sass';

const SectionItem = ({ item, newTabOnClick }) => (
  newTabOnClick
    ? (
      <ListGroup.Item
        className="SectionItem text-center mb-2"
        action
        href={item.url}
        target={newTabOnClick ? '_blank' : ''}
        rel={newTabOnClick ? 'noreferrer' : ''}
      >
        <h5 className="ItemName">{item.name}</h5>
      </ListGroup.Item>
    )
    : (
      <Link to={item.url} className="ItemLink">
        <ListGroup.Item className="SectionItem text-center mb-2">
          <h5 className="ItemName">{item.name}</h5>
        </ListGroup.Item>
      </Link>
    )
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
