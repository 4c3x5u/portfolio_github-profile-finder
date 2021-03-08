import axios from 'axios';

const parseGist = (gistData) => ({
  description: gistData.description || '[No Description]',
  url: gistData.html_url,
});

const handleGistsFound = (setSearching, setFound, setGists) => (response) => {
  setGists(response.data.map(parseGist));
  setFound(true);
  setTimeout(() => setSearching(false), 700);
};

const handleGistsNotFound = (setSearching, setFound, setGists) => () => {
  setGists([]);
  setFound(false);
  setTimeout(() => setSearching(false), 700);
};

const gistsAPI = {
  search: (login, setSearhing, setFound, setGists) => {
    axios
      .get(`https://api.github.com/users/${login}/gists`)
      .then(handleGistsFound(setSearhing, setFound, setGists))
      .catch(handleGistsNotFound(setSearhing, setFound, setGists));
  },
};

export default gistsAPI;
