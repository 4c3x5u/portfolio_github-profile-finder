import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Searching from './Searching';
import NotFound from './NotFound';

const Section = ({
  name,
  api,
  href,
  view,
  hasFooter,
}) => {
  const { login } = useParams();
  const [searching, setSearching] = useState(false);
  const [found, setFound] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setSearching(true);
    api.search(login, setSearching, setFound, setItems);
  }, [login]);

  const sectionHeader = () => <Header title={name} href={href} hasFooter={hasFooter} />;

  const sectionContent = () => {
    if (searching) { return <Searching />; }
    if (found) { return view(items); }
    return <NotFound page={name} />;
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
  name: PropTypes.string.isRequired,
  api: PropTypes.objectOf({
    search: PropTypes.func.isRequried,
  }).isRequired,
  href: PropTypes.string.isRequired,
  view: PropTypes.func.isRequired,
  hasFooter: PropTypes.bool.isRequired,
};

export default Section;
