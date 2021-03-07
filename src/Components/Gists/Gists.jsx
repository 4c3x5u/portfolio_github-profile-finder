import React from 'react';
import { useParams } from 'react-router-dom';
import gistsAPI from '../../API/gistsAPI';
import Section from '../Shared/Section';
import GistsFound from './GistsFound';

const Gists = () => {
  const { login } = useParams();
  return (
    <Section
      title="Gists"
      href={`https://gist.github.com/${login}`}
      api={gistsAPI}
      renderFound={(gists) => <GistsFound gists={gists} />}
      hasFooter
    />
  );
};

export default Gists;
