import axios from 'axios';

const parseFollowing = (followingResponseData) => ({ login: followingResponseData.login });

const handleFollowingFound = (setFollowing, setFollowingFound) => (followingResponse) => {
  const following = followingResponse.data.map(parseFollowing);
  setFollowing(following);
  setFollowingFound(true);
};

const handleFollowingNotFound = (setFollowing, setFollowingFound) => () => {
  setFollowing([]);
  setFollowingFound(false);
};

const followingAPI = {
  get: (login, setFollowing, setFollowingFound) => (
    axios
      .get(`https://api.github.com/users/${login}/following`)
      .then(handleFollowingFound(setFollowing, setFollowingFound))
      .catch(handleFollowingNotFound(setFollowing, setFollowingFound))
  ),
};

export default followingAPI;
