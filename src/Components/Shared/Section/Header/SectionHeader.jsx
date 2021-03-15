import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import "./SectionHeader.sass";

const SectionHeader = ({
  title,
  href,
  hasRoundTop,
  hasBackButton,
}) => (
  <div className={`${hasRoundTop ? "Round" : "Square"}Header text-center`}>
    {
      hasBackButton && (
        <Link to={href} className={`${hasRoundTop ? "Round" : "Square"}BackButton`}>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" />
        </Link>
      )
    }
    <h5 className="text-light">{title}</h5>
  </div>
);

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  hasRoundTop: PropTypes.bool,
  hasBackButton: PropTypes.bool,
};

SectionHeader.defaultProps = {
  hasRoundTop: false,
  hasBackButton: false,
};

export default SectionHeader;
