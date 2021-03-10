import get from '../shared/get';

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

const getUser = (login, setSearching, setFound, setUser) => (
  get(
    `https://api.github.com/users/${login}`,
    setSearching,
    setFound,
    setUser,
    parseUser,
    true,
  )
);

export default getUser;
