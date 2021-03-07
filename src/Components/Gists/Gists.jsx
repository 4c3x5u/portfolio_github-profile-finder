import React from 'react';
import gistsAPI from '../../API/gistsAPI';
import Section from '../Shared/Section/Section';
import GistsFound from './GistsFound';
import GistsNotFound from './GistsNotFound';

const Gists = () => (
  <Section
    title="Gists"
    api={gistsAPI}
    renderFound={(gists) => <GistsFound gists={gists} />}
    renderNotFound={() => <GistsNotFound />}
  />
);

export default Gists;
