import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../../../Shared/Section/Section';
import BlobList from './BlobList/BlobList';
import getRepoContent from '../../../../API/repos/getRepoContent';

const RepoContent = () => {
  const { login, name } = useParams();
  return (
    <Section
      name="Content"
      single={name}
      get={getRepoContent}
      href={`https://www.github.com/${login}/${name}`}
      view={(content) => <BlobList content={content} />}
    />
  );
};

export default RepoContent;
