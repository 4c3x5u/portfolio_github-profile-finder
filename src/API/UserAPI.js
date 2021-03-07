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

const handleUserFound = (setSearching, setFound, setUser) => (response) => {
  setUser(parseUser(response.data));
  setFound(true);
  setTimeout(() => setSearching(false), 700);
};

const handleUserNotFound = (setSearching, setFound, setUser) => () => {
  setUser({});
  setFound(false);
  setTimeout(() => setSearching(false), 700);
};

const userAPI = {
  search: (login, setSearching, setFound, setUser) => (
    axios
      .get(`https://api.github.com/users/${login}`)
      .then(handleUserFound(setSearching, setFound, setUser))
      .catch(handleUserNotFound(setSearching, setFound, setUser))
  ),
};

export default userAPI;
