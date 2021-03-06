import axios from 'axios';

const parseFollowing = (followingResponseData) => ({
  login: followingResponseData.login,
  url: followingResponseData.html_url,
});

export const handleFollowingFound = (setFollowing, setFollowingFound) => (followingResponse) => {
  const following = followingResponse.data.map(parseFollowing);
  setFollowing(following);
  setFollowingFound(true);
};

export const handleFollowingNotFound = (setFollowing, setFollowingFound) => () => {
  setFollowing([]);
  setFollowingFound(false);
};

export const requestFollowing = (userLogin, handleSuccess, handleFailure) => {
  axios
    .get(`https://api.github.com/users/${userLogin}/following`)
    .then(handleSuccess)
    .catch(handleFailure);
};
