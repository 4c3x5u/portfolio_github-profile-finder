import React from "react";
import PropTypes from "prop-types";
import "./SectionHeader.sass";

const SectionHeader = ({ title, href, hasRoundTop }) => (
  <a className="HeaderLink" href={href} target="_blank" rel="noreferrer">
    <div className={`${hasRoundTop ? "RoundTop" : "Square"}Header text-center`}>
      <h5 className="text-light">
        {title}
      </h5>
    </div>
  </a>
);

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  hasRoundTop: PropTypes.bool.isRequired,
};

export default SectionHeader;
