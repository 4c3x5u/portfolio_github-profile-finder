import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SectionHeader from "./Header/SectionHeader";
import Searching from "../Searching";
import NotFound from "../NotFound";

const Section = ({
  name,
  get,
  href,
  view,
  hasRoundTop,
  hasInSiteLink,
}) => {
  const [searching, setSearching] = useState(false);
  const [found, setFound] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setSearching(true);
    get(setSearching, setFound, setItems);
  }, [name]);

  const sectionHeader = () => (
    <SectionHeader
      title={name}
      href={href}
      hasRoundTop={hasRoundTop}
      hasInSiteLink={hasInSiteLink}
    />
  );

  const sectionContent = () => {
    if (searching) { return <Searching />; }
    if (found) { return view(items); }
    return <NotFound page={name} />;
  };

  return (
    <div className="Section">
      {sectionHeader()}
      {sectionContent()}
    </div>
  );
};

Section.propTypes = {
  name: PropTypes.string.isRequired,
  get: PropTypes.func.isRequired,
  href: PropTypes.string.isRequired,
  view: PropTypes.func.isRequired,
  hasRoundTop: PropTypes.bool,
  hasInSiteLink: PropTypes.bool,
};

Section.defaultProps = {
  hasRoundTop: false,
  hasInSiteLink: false,
};

export default Section;
