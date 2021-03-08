import React from 'react';
import PropTypes from 'prop-types';
import './Header.sass';

const Header = ({ title, href, hasFooter }) => (
  <a className="HeaderLink" href={href} target="_blank" rel="noreferrer">
    <div className={`${hasFooter ? 'Section' : 'Profile'}Header text-center`}>
      <h5 className="text-light">
        {title}
      </h5>
    </div>
  </a>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  hasFooter: PropTypes.bool.isRequired,
};

export default Header;
