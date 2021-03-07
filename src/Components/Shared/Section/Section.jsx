import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Searching from '../Searching/Searching';
import Footer from '../Footer/Footer';
import './Section.sass';

const Section = ({
  title,
  api,
  renderFound,
  renderNotFound,
  hasFooter,
}) => {
  const { login } = useParams();
  const [searching, setSearching] = useState(false);
  const [found, setFound] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setSearching(true);
    api.search(login, setSearching, setFound, setItems);
  }, []);

  const sectionHeader = () => (
    <div className="SectionHeader bg-dark text-center">
      <h5 className="text-light">{title}</h5>
    </div>
  );

  const sectionContent = () => {
    if (searching) { return <Searching />; }
    if (found) { return renderFound(items); }
    return renderNotFound();
  };

  const sectionFooter = () => hasFooter && <Footer />;

  return (
    <div className="Section">
      {sectionHeader()}
      {sectionContent()}
      {sectionFooter()}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  api: PropTypes.objectOf({
    search: PropTypes.func.isRequried,
  }).isRequired,
  renderFound: PropTypes.func.isRequired,
  renderNotFound: PropTypes.func.isRequired,
  hasFooter: PropTypes.bool.isRequired,
};

export default Section;
