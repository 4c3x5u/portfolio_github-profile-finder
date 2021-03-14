import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faFolder } from "@fortawesome/free-solid-svg-icons";
import "./FileListItem.sass";

const FileListItem = ({ item }) => (
  <div className="FileListItem">
    <Link to={item.url} className="Link">
      <ListGroup.Item className="Item text-center mb-2">
        <h5>
          {
            item.type === "dir"
              ? <FontAwesomeIcon className="Icon" icon={faFolder} />
              : <FontAwesomeIcon className="Icon" icon={faFileAlt} />
          }
          {item.name.length < 80 ? item.name : item.name.substring(0, 80)}
        </h5>
      </ListGroup.Item>
    </Link>
  </div>
);

FileListItem.propTypes = {
  item: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default FileListItem;
