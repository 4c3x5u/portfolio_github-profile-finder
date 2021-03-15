import React from "react";
import { useParams } from "react-router-dom";
import FileContent from "../../Shared/FileContent";
import Section from "../../Shared/Section/Section";
import { getGistFile } from "../../../API/gistAPI";

const GistFile = () => {
  const { id, name } = useParams();
  return (
    <Section
      title={`File: ${name}`}
      get={getGistFile(id, name)}
      view={(file) => <FileContent file={file} />}
      hasBackButton
    />
  );
};

export default GistFile;
