import React from "react";
import { useParams } from "react-router-dom";
import Section from "../Shared/Section/Section";
import SectionList from "../Shared/Section/List/SectionList";
import SectionItem from "../Shared/Section/Item/SectionItem";
import { getGistList } from "../../API/gistAPI";

const GistList = () => {
  const { login } = useParams();
  return (
    <Section
      title="Gists"
      get={getGistList(login)}
      view={(gists) => (
        <SectionList
          items={gists}
          view={(gist) => <SectionItem newTabOnClick item={gist} />}
        />
      )}
      hasBackButton
      url={`/${login}`}
    />
  );
};

export default GistList;
