import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../Shared/Section';
import gistsAPI from '../../API/gistsAPI';
import GistsList from './GistsList';

const Gists = () => (
  <Section
    title="Gists"
    href={`https://gist.github.com/${useParams().login}`}
    api={gistsAPI}
    renderFound={(gists) => <GistsList gists={gists} />}
    hasFooter
  />
);

export default Gists;
