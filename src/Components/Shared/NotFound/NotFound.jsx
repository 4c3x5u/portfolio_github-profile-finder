import React from 'react';
import PropTypes from 'prop-types';

const NotFound = ({ page }) => <h1>{`${page} not found.`}</h1>;

NotFound.propTypes = {
  page: PropTypes.string.isRequired,
};

export default NotFound;
