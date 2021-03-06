import axios from 'axios';

const parseUser = (userResponseData) => ({
  login: userResponseData.login,
  name: userResponseData.name || '[No Name]',
  bio: userResponseData.bio || '[No Bio]',
  location: userResponseData.location || '[No Location]',
  avatar: userResponseData.avatar_url,
  numberOfPublicRepos: userResponseData.public_repos,
  numberOfPublicGists: userResponseData.public_gists,
  numberOfFollowers: userResponseData.followers,
  numberOfFollowing: userResponseData.following,
});

const handleUserFound = (setUser, setUserFound) => (userResponse) => {
  setUser(parseUser(userResponse.data));
  setUserFound(true);
};

const handleUserNotFound = (setUser, setUserFound) => () => {
  setUser({});
  setUserFound(false);
};

const userAPI = {
  get: (searchParam, setUser, setUserFound) => (
    axios
      .get(`https://api.github.com/users/${searchParam}`)
      .then(handleUserFound(setUser, setUserFound))
      .catch(handleUserNotFound(setUser, setUserFound))
  ),
};

export default userAPI;
