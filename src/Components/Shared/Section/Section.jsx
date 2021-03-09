import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import SectionHeader from './Header/SectionHeader';
import SectionFooter from './Footer/SectionFooter';
import Searching from '../Searching';
import NotFound from '../NotFound';

const Section = ({
  name,
  get,
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
    get(login, setSearching, setFound, setItems);
  }, [login]);

  const sectionHeader = () => <SectionHeader title={name} href={href} hasFooter={hasFooter} />;

  const sectionContent = () => {
    if (searching) { return <Searching />; }
    if (found) { return view(items); }
    return <NotFound page={name} />;
  };

  const sectionFooter = () => hasFooter && <SectionFooter />;

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
  get: PropTypes.func.isRequired,
  href: PropTypes.string.isRequired,
  view: PropTypes.func.isRequired,
  hasFooter: PropTypes.bool.isRequired,
};

export default Section;
