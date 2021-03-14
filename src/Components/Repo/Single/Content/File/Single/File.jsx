import React from "react";
import { useParams, useLocation } from "react-router-dom";
import FileContent from "./Content/FileContent";
import Section from "../../../../../Shared/Section/Section";
import { getFile } from "../../../../../../API/fileAPI";

const File = () => {
  const { login, repoName, fileName } = useParams();
  const { pathname } = useLocation();
  const filePath = pathname.substring(pathname.indexOf(fileName));
  return (
    <Section
      title="File"
      get={getFile(login, repoName, filePath)}
      view={(content) => <FileContent content={content} />}
    />
  );
};

export default File;
