import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import FileContent from '../../../../Shared/FileContent';
import Section from '../../../../Shared/Section/Section';
import { getRepoFile } from '../../../../../API/repoAPI';

const RepoFile = () => {
  const { login, repoName, fileName } = useParams();
  const { pathname } = useLocation();
  const filePath = pathname.substring(pathname.indexOf(fileName));
  return (
    <Section
      title={`File: /${filePath}`}
      get={getRepoFile(login, repoName, filePath)}
      view={(file) => <FileContent file={file} />}
      hasBackButton
      url={pathname.substring(0, pathname.lastIndexOf('/'))}
    />
  );
};

export default RepoFile;
