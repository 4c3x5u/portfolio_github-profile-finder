import React from 'react';
import PropTypes from 'prop-types';

const SubpageHeader = ({ subpage }) => (
  <div
    className={`${subpage}Head bg-dark text-center mb-2`}
    style={{
      border: '2px solid #343a40',
      padding: '1.2rem 0 0.7rem 0',
      borderRadius: '2rem 2rem 0 0',
    }}
  >
    <h5 className="text-light">{subpage}</h5>
  </div>
);

SubpageHeader.propTypes = {
  subpage: PropTypes.string.isRequired,
};

export default SubpageHeader;
