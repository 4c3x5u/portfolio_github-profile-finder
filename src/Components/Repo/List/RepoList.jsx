import React from "react";
import { useParams } from "react-router-dom";
import Section from "../../Shared/Section/Section";
import SectionList from "../../Shared/Section/List/SectionList";
import SectionItem from "../../Shared/Section/Item/SectionItem";
import { getRepoList } from "../../../API/repoAPI";

const RepoList = () => {
  const { login } = useParams();
  return (
    <Section
      title="Repos"
      get={getRepoList(login)}
      view={(repos) => (
        <SectionList
          items={repos}
          view={(repo) => <SectionItem item={repo} />}
        />
      )}
      hasBackButton
      url={`/${login}`}
    />
  );
};

export default RepoList;
