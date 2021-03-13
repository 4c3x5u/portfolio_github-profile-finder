import React from "react";
import { useParams } from "react-router-dom";
import getFollowingList from "../../API/following/getFollowingList";
import Section from "../Shared/Section/Section";
import SectionList from "../Shared/Section/List/SectionList";
import SectionItem from "../Shared/Section/Item/SectionItem";

const FollowingList = () => (
  <Section
    name="Following"
    href={`https://www.github.com/${useParams().login}?tab=following`}
    get={getFollowingList}
    view={(following) => (
      <SectionList
        items={following}
        view={(user) => <SectionItem item={user} />}
      />
    )}
  />
);

export default FollowingList;
