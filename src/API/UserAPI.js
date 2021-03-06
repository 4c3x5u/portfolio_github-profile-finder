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

const handleUserFound = (setLoading, setUserFound, setUser) => (userResponse) => {
  setUser(parseUser(userResponse.data));
  setUserFound(true);
  setTimeout(() => setLoading(false), 700);
};

const handleUserNotFound = (setLoading, setUserFound, setUser) => () => {
  setUser({});
  setUserFound(false);
  setTimeout(() => setLoading(false), 700);
};

const userAPI = {
  get: (login, setLoading, setUserFound, setUser) => (
    axios
      .get(`https://api.github.com/users/${login}`)
      .then(handleUserFound(setLoading, setUserFound, setUser))
      .catch(handleUserNotFound(setLoading, setUserFound, setUser))
  ),
};

export default userAPI;
