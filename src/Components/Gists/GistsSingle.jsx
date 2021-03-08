import React from 'react';
import PropTypes from 'prop-types';
import Single from '../Shared/Single/Single';

const GistsSingle = ({ gist }) => <Single newTabOnClick section="Gists" item={gist} />;

GistsSingle.propTypes = {
  gist: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default GistsSingle;
