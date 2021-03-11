import get from '../shared/get';

const parseGist = (gistData) => ({
  name: gistData.description || '[No Name]',
  url: gistData.html_url,
});

const getGistList = (login, setSearching, setFound, setGists) => (
  get(
    `https://api.github.com/users/${login}/gists`,
    setSearching,
    setFound,
    setGists,
    parseGist,
    false,
  )
);

export default getGistList;
