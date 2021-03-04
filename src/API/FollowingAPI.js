import axios from 'axios';

const parseFollowing = (followingResponseData) => ({
  username: followingResponseData.login,
  url: followingResponseData.html_url,
});

// TODO: Order the other `handle...` functions' parameters as below
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
  // FIXME: Might there be a case where we don't get an exception, but an empty list of following?
  // If so, this and the other API functions might have a vulnerability.
  console.log(`followingUrl: ${followingUrl}`);
  axios
    .get(followingUrl)
    .then((res) => {
      console.log(`res: ${JSON.stringify(res)}`);
      handleSuccess(res);
    })
    .catch((ex) => {
      console.log(`es: ${JSON.stringify(ex)}`);
      handleFailure();
    });
};
