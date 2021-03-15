import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Section from "../../../Shared/Section/Section";
import RepoFileList from "./File/List/RepoFileList";
import { getRepoContent } from "../../../../API/repoAPI";

const RepoContent = () => {
  const { login, name } = useParams();
  const { pathname } = useLocation();
  const dir = pathname.substring(pathname.indexOf(name));
  const titleSuffix = (
    pathname.substring(pathname.indexOf(`${name}/content`) + `${name}/content/`.length)
  );
  const title = `Content${titleSuffix && `: /${titleSuffix}`}`;
  return (
    <Section
      title={title.length > 80 ? `${title.substring(0, 80)}...` : title}
      get={getRepoContent(login, dir)}
      view={(content) => <RepoFileList content={content} />}
      hasBackButton={titleSuffix}
    />
  );
};

export default RepoContent;
