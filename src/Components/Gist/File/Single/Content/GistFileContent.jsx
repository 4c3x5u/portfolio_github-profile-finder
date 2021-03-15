import React from "react";
import PropTypes from "prop-types";
import SyntaxHighlighter from "react-syntax-highlighter";

const GistContent = ({ gist }) => (
  <SyntaxHighlighter className="FileContent">
    {gist.content}
  </SyntaxHighlighter>
);

GistContent.propTypes = {
  gist: PropTypes.objectOf({
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default GistContent;
