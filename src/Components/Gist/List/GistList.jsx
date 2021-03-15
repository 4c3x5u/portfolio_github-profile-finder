import React from "react";
import { useParams } from "react-router-dom";
import Section from "../../Shared/Section/Section";
import SectionList from "../../Shared/Section/List/SectionList";
import SectionItem from "../../Shared/Section/Item/SectionItem";
import { getGistList } from "../../../API/gistAPI";

const GistList = () => (
  <Section
    title="Gists"
    get={getGistList(useParams().login)}
    view={(gists) => (
      <SectionList
        items={gists}
        view={(gist) => <SectionItem item={gist} />}
      />
    )}
  />
);

export default GistList;
