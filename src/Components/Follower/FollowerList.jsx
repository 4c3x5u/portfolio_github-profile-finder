import React from "react";
import { useParams } from "react-router-dom";
import Section from "../Shared/Section/Section";
import SectionList from "../Shared/Section/List/SectionList";
import SectionItem from "../Shared/Section/Item/SectionItem";
import { getFollowerList } from "../../API/followerAPI";

const FollowerList = () => {
  const { login } = useParams();
  return (
    <Section
      name="Followers"
      get={getFollowerList(login)}
      href={`https://www.github.com/${login}?tab=followers`}
      view={(followers) => (
        <SectionList
          items={followers}
          view={(follower) => <SectionItem item={follower} />}
        />
      )}
    />
  );
};

export default FollowerList;
