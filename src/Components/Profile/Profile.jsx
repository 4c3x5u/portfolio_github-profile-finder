import React from "react";
import { useParams } from "react-router-dom";
import Section from "../Shared/Section/Section";
import ProfileBody from "./Body/ProfileBody";
import { getUser } from "../../API/userAPI";

const Profile = () => {
  const { login } = useParams();
  return (
    <Section
      title={`@${login}`}
      get={getUser(login)}
      view={(user) => <ProfileBody user={user} />}
      hasRoundTop
    />
  );
};

export default Profile;
