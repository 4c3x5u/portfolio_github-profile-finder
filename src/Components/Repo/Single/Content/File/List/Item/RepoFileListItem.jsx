import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faFolder } from "@fortawesome/free-solid-svg-icons";
import "./RepoFileListItem.sass";

const RepoFileListItem = ({ file }) => (
  <div className="RepoFileListItem">
    <Link to={file.url} className="Link">
      <ListGroup.Item className="Item text-center mb-2">
        <h5>
          {
            file.type === "dir"
              ? <FontAwesomeIcon className="Icon" icon={faFolder} />
              : <FontAwesomeIcon className="Icon" icon={faFileAlt} />
          }
          {file.name.length < 80 ? file.name : file.name.substring(0, 80)}
        </h5>
      </ListGroup.Item>
    </Link>
  </div>
);

RepoFileListItem.propTypes = {
  file: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default RepoFileListItem;
