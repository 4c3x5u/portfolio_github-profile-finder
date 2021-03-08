import axios from 'axios';

const parseFollowing = (followingData) => ({
  name: followingData.login,
  url: `/${followingData.login}`,
});

const handleFollowingFound = (setSearching, setFound, setFollowing) => (response) => {
  setFollowing(response.data.map(parseFollowing));
  setFound(true);
  setTimeout(() => setSearching(false), 700);
};

const handleFollowingNotFound = (setSearching, setFound, setFollowing) => () => {
  setFollowing([]);
  setFound(false);
  setTimeout(() => setSearching(false), 700);
};

const followingAPI = {
  search: (login, setSearching, setFound, setFollowing) => (
    axios
      .get(`https://api.github.com/users/${login}/following`)
      .then(handleFollowingFound(setSearching, setFound, setFollowing))
      .catch(handleFollowingNotFound(setSearching, setFound, setFollowing))
  ),
};

export default followingAPI;
