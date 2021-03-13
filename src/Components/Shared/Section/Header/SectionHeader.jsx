import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./SectionHeader.sass";

const SectionHeader = ({
  title,
  href,
  hasRoundTop,
  hasInSiteLink,
}) => (
  hasInSiteLink
    ? (
      <Link className="HeaderLink" to={href}>
        <div className={`${hasRoundTop ? "RoundTop" : "Square"}Header text-center`}>
          <h5 className="text-light">
            {title}
          </h5>
        </div>
      </Link>
    ) : (
      <a className="HeaderLink" href={href} target="_blank" rel="noreferrer">
        <div className={`${hasRoundTop ? "RoundTop" : "Square"}Header text-center`}>
          <h5 className="text-light">
            {title}
          </h5>
        </div>
      </a>
    )
);

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  hasRoundTop: PropTypes.bool,
  hasInSiteLink: PropTypes.bool,
};

SectionHeader.defaultProps = {
  hasRoundTop: false,
  hasInSiteLink: false,
};

export default SectionHeader;
