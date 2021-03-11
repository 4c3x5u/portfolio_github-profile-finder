import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../../../Shared/Section/Section';
import SectionList from '../../../Shared/Section/List/SectionList';
import SectionItem from '../../../Shared/Section/Item/SectionItem';
import getRepoContent from '../../../../API/repos/getRepoContent';

const RepoContent = () => {
  const { login, name } = useParams();
  return (
    <Section
      name="Content"
      single={name}
      get={getRepoContent}
      href={`https://www.github.com/${login}/${name}`}
      view={(content) => (
        <SectionList items={content} view={(blob) => <SectionItem item={blob} />} />
      )}
      hasFooter
    />
  );
};

export default RepoContent;
