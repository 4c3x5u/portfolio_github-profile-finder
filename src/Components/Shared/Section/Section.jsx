import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SectionHeader from './Header/SectionHeader';
import Spinner from '../Spinner';
import NotFound from '../NotFound';

const Section = ({
  title,
  get,
  view,
  hasRoundTop,
  hasBackButton,
  url,
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
      hasRoundTop={hasRoundTop}
      hasBackButton={hasBackButton}
      url={url}
    />
  );

  const sectionContent = () => {
    if (searching) { return <Spinner />; }
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
  view: PropTypes.func.isRequired,
  hasRoundTop: PropTypes.bool,
  hasBackButton: PropTypes.bool,
  url: PropTypes.string,
};

Section.defaultProps = {
  hasRoundTop: false,
  hasBackButton: false,
  url: undefined,
};

export default Section;
