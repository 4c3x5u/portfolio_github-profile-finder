import axios from 'axios';

const parseFollowing = (followingResponseData) => ({
  login: followingResponseData.login,
  url: followingResponseData.html_url,
});

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
  get: (userLogin, setFollowing, setFollowingFound) => (
    axios
      .get(`https://api.github.com/users/${userLogin}/following`)
      .then(handleFollowingFound(setFollowing, setFollowingFound))
      .catch(handleFollowingNotFound(setFollowing, setFollowingFound))
  ),
};

export default followingAPI;
