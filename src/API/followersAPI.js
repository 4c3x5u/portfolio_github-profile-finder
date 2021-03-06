import axios from 'axios';

const parseFollower = (follower) => ({ login: follower.login });

const handleFollowersFound = (setFollowers, setFollowersFound) => (followersReponse) => {
  const followers = followersReponse.data.map(parseFollower);
  setFollowers(followers);
  setFollowersFound(true);
};

const handleFollowersNotFound = (setFollowers, setFollowersFound) => () => {
  setFollowers([]);
  setFollowersFound(false);
};

const followersAPI = {
  get: (login, setFollowers, setFollowersFound) => (
    axios
      .get(`https://api.github.com/users/${login}/followers`)
      .then(handleFollowersFound(setFollowers, setFollowersFound))
      .catch(handleFollowersNotFound(setFollowers, setFollowersFound))
  ),
};

export default followersAPI;
