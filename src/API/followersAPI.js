import axios from 'axios';

const parseFollower = (followerData) => ({
  login: followerData.login,
});

const handleFollowersFound = (setSearching, setFound, setFollowers) => (response) => {
  setFollowers(response.data.map(parseFollower));
  setFound(true);
  setTimeout(() => setSearching(false), 700);
};

const handleFollowersNotFound = (setSearching, setFound, setFollowers) => () => {
  setFollowers([]);
  setFound(false);
  setTimeout(() => setSearching(false), 700);
};

const followersAPI = {
  search: (login, setSearcing, setFound, setFollowers) => (
    axios
      .get(`https://api.github.com/users/${login}/followers`)
      .then(handleFollowersFound(setSearcing, setFound, setFollowers))
      .catch(handleFollowersNotFound(setSearcing, setFound, setFollowers))
  ),
};

export default followersAPI;
