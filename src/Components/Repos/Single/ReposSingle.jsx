import React from "react";
import { useParams } from "react-router-dom";
import Section from "../../Shared/Section/Section";
import ReposSingleBody from "./Body/ReposSingleBody";
import getRepo from "../../../API/repos/getRepo";

const ReposSingle = () => {
  const { login, name } = useParams();
  return (
    <Section
      name="Repos"
      single={name}
      get={getRepo}
      href={`https://www.github.com/${login}/${name}`}
      view={(repo) => <ReposSingleBody repo={repo} />}
    />
  );
};

export default ReposSingle;
