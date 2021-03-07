import React from 'react';
import PropTypes from 'prop-types';
import './PageHeader.sass';

const PageHeader = ({ page }) => (
  <div className="PageHeader bg-dark text-center mb-2">
    <h5 className="text-light">{page}</h5>
  </div>
);

PageHeader.propTypes = {
  page: PropTypes.string.isRequired,
};

export default PageHeader;
