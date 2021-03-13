import React from "react";
import PropTypes from "prop-types";

const FileContent = ({ content }) => (
  <div className="FileContent">
    {content}
  </div>
);

FileContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default FileContent;
