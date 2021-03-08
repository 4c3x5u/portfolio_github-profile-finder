import React from 'react';
import PropTypes from 'prop-types';
import GistsSingle from './GistsSingle';
import List from '../Shared/List/List';

const GistsList = ({ gists }) => (
  <List
    name="Gists"
    items={gists}
    viewSingle={(gist) => <GistsSingle gist={gist} />}
  />
);

GistsList.propTypes = ({
  gists: PropTypes.arrayOf(
    PropTypes.objectOf({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
});

export default GistsList;
