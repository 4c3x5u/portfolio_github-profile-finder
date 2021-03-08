import React from 'react';
import PropTypes from 'prop-types';
import GistsSingle from './GistsSingle';
import List from '../Shared/List/List';

const GistsFound = ({ gists }) => (
  <List
    name="Gists"
    items={gists}
    viewSingle={(gist) => <GistsSingle gist={gist} />}
  />
);

GistsFound.propTypes = ({
  gists: PropTypes.arrayOf(
    PropTypes.objectOf({
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
});

export default GistsFound;
