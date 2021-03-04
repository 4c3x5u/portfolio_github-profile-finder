import axios from 'axios';

const parseUser = (userResponseData) => ({
  name: userResponseData.name || '[No Name]',
  bio: userResponseData.bio || '[No Bio]',
  location: userResponseData.location || '[No Location]',
  avatar: userResponseData.avatar_url,
  numberOfPublicRepos: userResponseData.public_repos,
  reposUrl: userResponseData.repos_url,
  numberOfPublicGists: userResponseData.public_gists,
  numberOfFollowers: userResponseData.followers,
  numberOfFollowing: userResponseData.following,
  followingUrl:
    userResponseData.following_url.substring(
      0,
      userResponseData.following_url.indexOf('{'),
    ),
});

export const handleUserFound = (setUserFound, setUser) => (userResponse) => {
  const user = parseUser(userResponse.data);
  setUser(user);
  setUserFound(true);
};

export const handleUserNotFound = (setUserFound, setUser) => () => {
  setUser({});
  setUserFound(false);
};

export const searchUser = (searchParam, handleSuccess, handleFailure) => (
  axios
    .get(`https://api.github.com/users/${searchParam}`)
    .then(handleSuccess)
    .catch(handleFailure)
);
