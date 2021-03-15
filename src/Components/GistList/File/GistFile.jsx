import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import FileContent from '../../Shared/FileContent';
import Section from '../../Shared/Section/Section';
import { getGistFile } from '../../../API/gistAPI';

const GistFile = () => {
  const { id, name } = useParams();
  const { pathname } = useLocation();
  return (
    <Section
      title={`File: ${name}`}
      get={getGistFile(id, name)}
      view={(file) => <FileContent file={file} />}
      hasBackButton
      url={pathname.substring(0, pathname.lastIndexOf('/'))}
    />
  );
};

export default GistFile;
