import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import Col from 'react-bootstrap/Col';
import './NavCol.sass';

const NavCol = ({ name, url, amount }) => (
  <Col className="NavCol" xs={6}>
    {amount > 0
      ? (
        <Link className="NavLink" to={url}>
          {`${name}: ${amount}`}
        </Link>
      ) : (
        <h6>
          {`${name}: ${amount}`}
        </h6>
      )}
  </Col>
);

NavCol.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default NavCol;
