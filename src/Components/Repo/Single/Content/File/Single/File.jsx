import React from "react";
import { useParams, useLocation } from "react-router-dom";
import FileContent from "./Content/FileContent";
import Section from "../../../../../Shared/Section/Section";
import { getFile } from "../../../../../../API/repoAPI";

const File = () => {
  const { login, repoName, fileName } = useParams();
  const { pathname } = useLocation();
  const filePath = pathname.substring(pathname.indexOf(fileName));
  return (
    <Section
      title={`File: /${filePath}`}
      get={getFile(login, repoName, filePath)}
      view={(file) => <FileContent file={file} />}
      hasBackButton
    />
  );
};

export default File;
