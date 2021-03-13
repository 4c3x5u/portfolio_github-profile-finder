import get from "./shared/get";

export const getFollowingList = (login, setSearching, setFound, setFollowing) => (
  get(
    `https://api.github.com/users/${login}/following`,
    setSearching,
    setFound,
    setFollowing,
    (followingData) => ({
      name: followingData.login,
      url: `/${followingData.login}`,
    }),
    false,
  )
);

export default {
  getFollowingList,
};
