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
  hasInSiteLink,
  hasBackButton,
}) => {
  const backButton = () => (
    hasBackButton && (
      <div className={`${hasRoundTop ? "Round" : "Square"}BackButton`}>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" />
      </div>
    )
  );
  const headerLink = (content) => (
    hasInSiteLink
      ? <Link className="HeaderLink" to={href}>{content}</Link>
      : <a className="HeaderLink" href={href} target="_blank" rel="noreferrer">{content}</a>
  );
  return (
    <div className={`${hasRoundTop ? "Round" : "Square"}Header text-center`}>
      {backButton()}
      {headerLink(<h5 className="text-light">{title}</h5>)}
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  hasRoundTop: PropTypes.bool,
  hasInSiteLink: PropTypes.bool,
  hasBackButton: PropTypes.bool,
};

SectionHeader.defaultProps = {
  hasRoundTop: false,
  hasInSiteLink: false,
  hasBackButton: false,
};

export default SectionHeader;
