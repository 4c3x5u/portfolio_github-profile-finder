import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../Shared/Section';
import gistsAPI from '../../API/gistsAPI';
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
