import React from "react";
import { useParams } from "react-router-dom";
import Section from "../Shared/Section/Section";
import SectionList from "../Shared/Section/List/SectionList";
import SectionItem from "../Shared/Section/Item/SectionItem";
import { getFollowingList } from "../../API/followingAPI";

const FollowingList = () => {
  const { login } = useParams();
  return (
    <Section
      title="Following"
      get={getFollowingList(login)}
      view={(following) => (
        <SectionList
          items={following}
          view={(user) => <SectionItem item={user} />}
        />
      )}
      hasBackButton
      url={`/${login}`}
    />
  );
};

export default FollowingList;
