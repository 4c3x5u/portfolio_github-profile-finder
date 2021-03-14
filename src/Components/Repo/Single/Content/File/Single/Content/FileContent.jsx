import React from "react";
import PropTypes from "prop-types";
import SyntaxHighlighter from "react-syntax-highlighter";

const FileContent = ({ file }) => (
  <SyntaxHighlighter className="FileContent">
    {file.content}
  </SyntaxHighlighter>
);

FileContent.propTypes = {
  file: PropTypes.string.isRequired,
};

export default FileContent;
