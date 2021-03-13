import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faFolder } from "@fortawesome/free-solid-svg-icons";
import "./FileListItem.sass";

const FileListItem = ({ blob }) => (
  <div className="FileListItem">
    <Link to={blob.url} className="Link">
      <ListGroup.Item className="Item text-center mb-2">
        <h5>
          {
            blob.type === "dir"
              ? <FontAwesomeIcon className="Icon" icon={faFolder} />
              : <FontAwesomeIcon className="Icon" icon={faFileAlt} />
          }
          {blob.name.length < 80 ? blob.name : blob.name.substring(0, 80)}
        </h5>
      </ListGroup.Item>
    </Link>
  </div>
);

FileListItem.propTypes = {
  blob: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default FileListItem;
