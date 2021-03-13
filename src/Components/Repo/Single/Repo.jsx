import React from "react";
import { useParams } from "react-router-dom";
import Section from "../../Shared/Section/Section";
import RepoBody from "./Body/RepoBody";
import { getRepo } from "../../../API/repoAPI";

const Repo = () => {
  const { login, name } = useParams();
  return (
    <Section
      name={`Repo: ${name}`}
      single={name}
      get={getRepo(login, name)}
      href={`https://www.github.com/${login}/${name}`}
      view={(repo) => <RepoBody repo={repo} />}
    />
  );
};

export default Repo;
