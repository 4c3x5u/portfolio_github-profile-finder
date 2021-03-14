import React from "react";
import PropTypes from "prop-types";

const FileContent = ({ file }) => (
  <div className="FileContent">
    {console.log(`FileContent.file ${JSON.stringify(file)}`)}
    {file.content}
  </div>
);

FileContent.propTypes = {
  file: PropTypes.string.isRequired,
};

export default FileContent;
