import get from "./shared/get";

export const getFollowerList = (login) => (setSearching, setFound, setFollowers) => (
  get(
    `https://api.github.com/users/${login}/followers`,
    setSearching,
    setFound,
    setFollowers,
    (followerData) => ({
      name: followerData.login,
      url: `/${followerData.login}`,
    }),
    false,
  )
);

export default {
  getFollowerList,
};
