import React from "react";
import { useParams } from "react-router-dom";
import Section from "../../../Shared/Section/Section";
import { getGistFileList } from "../../../../API/gistAPI";
import SectionList from "../../../Shared/Section/List/SectionList";
import SectionItem from "../../../Shared/Section/Item/SectionItem";

const GistFiles = () => {
  const { login, id } = useParams();
  return (
    <Section
      title={`Gist: ${id}`}
      get={getGistFileList(login, id)}
      view={(gist) => (
        <SectionList
          items={gist.files}
          view={(file) => <SectionItem item={file} />}
        />
      )}
      hasBackButton
    />
  );
};

export default GistFiles;
