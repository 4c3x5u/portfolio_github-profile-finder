import React from 'react';
import PropTypes from 'prop-types';
import './Subheader.sass';

const Subheader = ({ title }) => (
  <div className="Subheader bg-dark text-center">
    <h5 className="text-light">{title}</h5>
  </div>
);

Subheader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Subheader;
