import axios from 'axios';

const parseFollowing = (following) => ({ login: following.login });

const handleFollowingFound = (
  setLoading,
  setFollowingFound,
  setFollowing,
) => (
  followingResponse,
) => {
  setFollowing(followingResponse.data.map(parseFollowing));
  setFollowingFound(true);
  setTimeout(() => setLoading(false), 700);
};

const handleFollowingNotFound = (setLoading, setFollowingFound, setFollowing) => () => {
  setFollowing([]);
  setFollowingFound(false);
  setTimeout(() => setLoading(false), 700);
};

const followingAPI = {
  get: (login, setLoading, setFollowingFound, setFollowing) => (
    axios
      .get(`https://api.github.com/users/${login}/following`)
      .then(handleFollowingFound(setLoading, setFollowingFound, setFollowing))
      .catch(handleFollowingNotFound(setLoading, setFollowingFound, setFollowing))
  ),
};

export default followingAPI;
