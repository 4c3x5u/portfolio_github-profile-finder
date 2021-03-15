import React from "react";
import PropTypes from "prop-types";
import SyntaxHighlighter from "react-syntax-highlighter";

const FileContent = ({ file }) => (
  <SyntaxHighlighter className="FileContent">
    {file.content}
  </SyntaxHighlighter>
);

FileContent.propTypes = {
  file: PropTypes.objectOf({
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default FileContent;
