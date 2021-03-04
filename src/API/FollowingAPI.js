import axios from 'axios';

const parseFollowing = (followingResponseData) => ({
  name: followingResponseData.name,
  description: followingResponseData.description || '[ No Description ]',
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
  axios
    .get(followingUrl)
    .then(handleSuccess)
    .catch(handleFailure);
};
