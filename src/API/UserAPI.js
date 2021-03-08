import axios from 'axios';

const parseUser = (userData) => ({
  login: userData.login,
  name: userData.name || '[No Name]',
  bio: userData.bio || '[No Bio]',
  location: userData.location || '[No Location]',
  avatar: userData.avatar_url,
  numberOfPublicRepos: userData.public_repos,
  numberOfPublicGists: userData.public_gists,
  numberOfFollowers: userData.followers,
  numberOfFollowing: userData.following,
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
