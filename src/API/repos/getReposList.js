import axios from 'axios';
import { handleItemsFound, handleItemsNotFound } from '../util';

const parseRepo = (repoData) => ({
  name: repoData.name,
  url: repoData.html_url,
});

const getReposList = (login, setSearching, setFound, setRepos) => (
  axios
    .get(`https://api.github.com/users/${login}/repos`)
    .then(handleItemsFound(setSearching, setFound, setRepos, parseRepo))
    .catch(handleItemsNotFound(setSearching, setFound, setRepos))
);

export default getReposList;
