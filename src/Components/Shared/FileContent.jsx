import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import a11yLight from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-light';

const FileContent = ({ file }) => (
  <SyntaxHighlighter className="FileContent bg-light" style={a11yLight}>
    {file.content}
  </SyntaxHighlighter>
);

FileContent.propTypes = {
  file: PropTypes.objectOf({
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default FileContent;
