import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Searching from '../Searching/Searching';
import Subheader from '../Subheader/Subheader';

const Section = ({
  title,
  login,
  api,
  renderFound,
  renderNotFound,
}) => {
  const [searching, setSearching] = useState(false);
  const [found, setFound] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setSearching(true);
    api.search(login, setSearching, setFound, setItems);
  }, []);

  const sectionHeader = () => <Subheader title={title} />;

  const sectionContent = () => {
    if (searching) { return <Searching />; }
    if (found) { return renderFound(items); }
    return renderNotFound();
  };

  return (
    <div className="Followers">
      {sectionHeader()}
      {sectionContent()}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  api: PropTypes.objectOf({
    search: PropTypes.func.isRequried,
  }).isRequired,
  renderFound: PropTypes.func.isRequired,
  renderNotFound: PropTypes.func.isRequired,
};

export default Section;
