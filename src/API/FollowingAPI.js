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

export const requestFollowing = (followingUrl, handleSuccess, handleFailure) => {
  axios
    .get(followingUrl)
    .then(handleSuccess)
    .catch(handleFailure);
};
