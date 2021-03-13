import React from "react";
import PropTypes from "prop-types";
import { ListGroup } from "react-bootstrap";
import FileListItem from "./Item/FileListItem";

const FileList = ({ content }) => {
  const orderedContent = content.sort().sort((blob) => blob.type !== "dir");
  return (
    <ListGroup className="FileList">
      {orderedContent.map((blob) => <FileListItem blob={blob} />)}
    </ListGroup>
  );
};

FileList.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.objectOf({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FileList;
