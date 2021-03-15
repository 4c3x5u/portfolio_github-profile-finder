import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SectionHeader from "./Header/SectionHeader";
import Searching from "../Searching";
import NotFound from "../NotFound";

const Section = ({
  title,
  url,
  get,
  view,
  hasRoundTop,
  hasBackButton,
}) => {
  const [searching, setSearching] = useState(false);
  const [found, setFound] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setSearching(true);
    get(setSearching, setFound, setItems);
  }, [title]);

  const sectionHeader = () => (
    <SectionHeader
      title={title}
      href={url}
      hasRoundTop={hasRoundTop}
      hasBackButton={hasBackButton}
    />
  );

  const sectionContent = () => {
    if (searching) { return <Searching />; }
    if (found) { return view(items); }
    return <NotFound page={title} />;
  };

  return (
    <div className="Section">
      {sectionHeader()}
      {sectionContent()}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  get: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  view: PropTypes.func.isRequired,
  hasRoundTop: PropTypes.bool,
  hasBackButton: PropTypes.bool,
};

Section.defaultProps = {
  hasRoundTop: false,
  hasBackButton: false,
};

export default Section;
