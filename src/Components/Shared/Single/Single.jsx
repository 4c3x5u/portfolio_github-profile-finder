import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';

const Single = ({
  newTabOnClick,
  sectionName,
  item,
}) => (
  <ListGroup.Item
    className={`${sectionName}Single Single bg-light text-center mb-2`}
    action
    href={item.url}
    target={newTabOnClick ? '_blank' : ''}
    rel={newTabOnClick ? 'noreferrer' : ''}
    style={{ border: '2px solid #343a40' }}
  >
    <h5>{item.name}</h5>
    {item.description && <p className="m-0">{item.description}</p>}
  </ListGroup.Item>
);

Single.propTypes = {
  newTabOnClick: PropTypes.bool,
  sectionName: PropTypes.string.isRequired,
  item: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

Single.defaultProps = { newTabOnClick: false };

export default Single;
