import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Section from '../../../Shared/Section/Section';
import BlobList from './BlobList/BlobList';
import getRepoContent from '../../../../API/repos/getRepoContent';

const RepoContent = () => {
  const { login, name } = useParams();
  const path = useLocation().pathname;
  const dir = path.substring(path.indexOf(name));
  return (
    <Section
      name="Content"
      single={dir}
      get={getRepoContent}
      href={`https://www.github.com/${login}/${name}`}
      view={(content) => <BlobList content={content} />}
    />
  );
};

export default RepoContent;
