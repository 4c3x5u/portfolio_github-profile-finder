import get from "../shared/get";

const parseFollower = (followerData) => ({
  name: followerData.login,
  url: `/${followerData.login}`,
});

const getFollowerList = (login, setSearching, setFound, setFollowers) => (
  get(
    `https://api.github.com/users/${login}/followers`,
    setSearching,
    setFound,
    setFollowers,
    parseFollower,
    false,
  )
);

export default getFollowerList;
