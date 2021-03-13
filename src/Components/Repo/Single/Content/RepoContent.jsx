import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Section from "../../../Shared/Section/Section";
import BlobList from "./BlobList/BlobList";
import getRepoContent from "../../../../API/repos/getRepoContent";

const RepoContent = () => {
  const { login, name } = useParams();
  const path = useLocation().pathname;
  const dir = path.substring(path.indexOf(name));
  const suffix = (
    path.substring(
      path.indexOf(`${name}/content`) + `${name}/content/`.length,
    )
  );
  const title = `Content${suffix && `: /${suffix}`}`;
  return (
    <Section
      name={title.length > 80 ? `${title.substring(0, 80)}...` : title}
      single={dir}
      get={getRepoContent}
      href={`https://www.github.com/${login}/${name}`}
      view={(content) => <BlobList content={content} />}
    />
  );
};

export default RepoContent;
