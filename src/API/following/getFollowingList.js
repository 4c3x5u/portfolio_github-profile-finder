import get from "../shared/get";

const parseFollowing = (followingData) => ({
  name: followingData.login,
  url: `/${followingData.login}`,
});

const getFollowingList = (login, setSearching, setFound, setFollowing) => (
  get(
    `https://api.github.com/users/${login}/following`,
    setSearching,
    setFound,
    setFollowing,
    parseFollowing,
    false,
  )
);

export default getFollowingList;
