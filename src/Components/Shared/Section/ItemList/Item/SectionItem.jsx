import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faFolder } from '@fortawesome/free-solid-svg-icons';
import './SectionItem.sass';

const SectionItem = ({ item, newTabOnClick }) => {
  const itemContent = (
    <h5 className="ItemName">
      {
        item.type && (
          item.type === 'dir'
            ? <FontAwesomeIcon className="Icon" icon={faFolder} />
            : <FontAwesomeIcon className="Icon" icon={faFileAlt} />
        )
      }
      {item.name}
    </h5>
  );
  return (
    newTabOnClick ? (
      <ListGroup.Item
        className="SectionItem text-center mb-2"
        action
        href={item.url}
        target="_blank"
        rel="noreferrer"
      >
        {itemContent}
      </ListGroup.Item>
    ) : (
      <Link to={item.url} className="ItemLink">
        <ListGroup.Item className="SectionItem text-center mb-2">
          {itemContent}
        </ListGroup.Item>
      </Link>
    )
  );
};

SectionItem.propTypes = {
  newTabOnClick: PropTypes.bool,
  item: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    type: PropTypes.string,
  }).isRequired,
};

SectionItem.defaultProps = { newTabOnClick: false };

export default SectionItem;
