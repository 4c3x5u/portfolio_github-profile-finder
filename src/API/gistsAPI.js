import axios from 'axios';

const parseGist = (gist) => ({
  description: gist.description || '[No Description]',
  url: gist.html_url,
});

const handleGistsFound = (setGists, setGistsFound) => (gistsResponse) => {
  const parsedGists = gistsResponse.data.map(parseGist);
  setGists(parsedGists);
  setGistsFound(true);
};

const handleGistsNotFound = (setGists, setGistsFound) => () => {
  console.log('HANDLEGISTSNOTFOUND');
  setGists([]);
  setGistsFound(false);
};

const gistsAPI = {
  get: (login, setGists, setGistsFound) => {
    console.log(`URL: https://api.github.com/users/${login}/gists`);
    axios
      .get(`https://api.github.com/users/${login}/gists`)
      .then((res) => {
        console.log(`RES: ${JSON.stringify(res)}`);
        handleGistsFound(setGists, setGistsFound)(res);
      })
      .catch((ex) => {
        console.log(`EX: ${JSON.stringify(ex)}`);
        handleGistsNotFound(setGists, setGistsFound);
      });
  },
};

export default gistsAPI;
