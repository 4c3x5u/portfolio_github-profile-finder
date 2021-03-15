import React from "react";
import PropTypes from "prop-types";
import { ListGroup } from "react-bootstrap";
import RepoFileListItem from "./Item/RepoFileListItem";

const RepoFileList = ({ content }) => (
  <ListGroup className="FileList">
    {
      content
        .sort()
        .sort((blob) => (blob.type !== "dir" ? 1 : -1))
        .map((file) => <RepoFileListItem file={file} />)
    }
  </ListGroup>
);

RepoFileList.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.objectOf({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default RepoFileList;
