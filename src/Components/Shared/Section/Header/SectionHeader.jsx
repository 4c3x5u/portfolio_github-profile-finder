import React from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import "./SectionHeader.sass";

const SectionHeader = ({
  title,
  hasRoundTop,
  hasBackButton,
  url,
}) => {
  const backButton = (icon) => (
    url ? (
      <Link
        className={`${hasRoundTop ? "Round" : "Square"}BackButton`}
        to={url}
      >
        {icon}
      </Link>
    ) : (
      <button
        className={`${hasRoundTop ? "Round" : "Square"}BackButton`}
        onClick={useHistory().goBack}
        type="button"
      >
        {icon}
      </button>
    )
  );
  return (
    <div className={`${hasRoundTop ? "Round" : "Square"}Header text-center`}>
      {hasBackButton && backButton(<FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" />) }
      <h5 className="text-light">{title}</h5>
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  hasRoundTop: PropTypes.bool,
  hasBackButton: PropTypes.bool,
  url: PropTypes.string,
};

SectionHeader.defaultProps = {
  hasRoundTop: false,
  hasBackButton: false,
  url: undefined,
};

export default SectionHeader;
