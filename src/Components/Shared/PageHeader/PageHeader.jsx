import React from 'react';
import PropTypes from 'prop-types';
import './PageHeader.sass';

const PageHeader = ({ title }) => (
  <div className="PageHeader bg-dark text-center">
    <h5 className="text-light">{title}</h5>
  </div>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeader;
