import axios from 'axios';

const parseFollower = (follower) => ({ login: follower.login });

const handleFollowersFound = (
  setLoading,
  setFollowersFound,
  setFollowers,
) => (
  followersReponse,
) => {
  setFollowers(followersReponse.data.map(parseFollower));
  setFollowersFound(true);
  setTimeout(() => setLoading(false), 700);
};

const handleFollowersNotFound = (setLoading, setFollowersFound, setFollowers) => () => {
  setFollowers([]);
  setFollowersFound(false);
  setTimeout(() => setLoading(false), 700);
};

const followersAPI = {
  get: (login, setLoading, setFollowersFound, setFollowers) => (
    axios
      .get(`https://api.github.com/users/${login}/followers`)
      .then(handleFollowersFound(setLoading, setFollowersFound, setFollowers))
      .catch(handleFollowersNotFound(setLoading, setFollowersFound, setFollowers))
  ),
};

export default followersAPI;
