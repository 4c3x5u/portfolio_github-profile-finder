import axios from 'axios';
import { handleItemsFound, handleItemsNotFound } from '../util';

const parseRepo = (repoData) => ({
  name: repoData.name,
  description: repoData.description,
  forked: repoData.fork,
  url: repoData.url,
});

const getReposSingle = (login, repoName, setSearching, setFound, setRepos) => (
  axios
    .get(`https://api.github.com/repos/${login}/${repoName}`)
    .then(handleItemsFound(setSearching, setFound, setRepos, parseRepo))
    .catch(handleItemsNotFound(setSearching, setFound, setRepos))
);

export default getReposSingle;
