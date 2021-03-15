import React from "react";
import { useParams } from "react-router-dom";
import Section from "./Shared/Section/Section";
import SectionItemList from "./Shared/Section/ItemList/SectionItemList";
import SectionItem from "./Shared/Section/ItemList/Item/SectionItem";
import { getFollowerList } from "../API/followerAPI";

const FollowerList = () => (
  <Section
    title="Followers"
    get={getFollowerList(useParams().login)}
    view={(followers) => (
      <SectionItemList
        items={followers}
        view={(follower) => <SectionItem item={follower} />}
      />
    )}
  />
);

export default FollowerList;
