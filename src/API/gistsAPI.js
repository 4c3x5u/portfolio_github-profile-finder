import axios from 'axios';

const parseGist = (gist) => ({
  description: gist.description || '[No Description]',
  url: gist.html_url,
});

const handleGistsFound = (
  setLoading,
  setGistsFound,
  setGists,
) => (
  gistsResponse,
) => {
  setGists(gistsResponse.data.map(parseGist));
  setGistsFound(true);
  setTimeout(() => setLoading(false), 700);
};

const handleGistsNotFound = (setLoading, setGistsFound, setGists) => () => {
  setGists([]);
  setGistsFound(false);
  setTimeout(() => setLoading(false), 700);
};

const gistsAPI = {
  get: (login, setLoading, setGistsFound, setGists) => {
    axios
      .get(`https://api.github.com/users/${login}/gists`)
      .then(handleGistsFound(setLoading, setGistsFound, setGists))
      .catch(handleGistsNotFound(setLoading, setGistsFound, setGists));
  },
};

export default gistsAPI;
