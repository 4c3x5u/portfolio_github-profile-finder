import axios from 'axios';

const parseRepo = (repoData) => ({
  name: repoData.name,
  description: repoData.description || '[ No Description ]',
  url: repoData.html_url,
});

const handleReposFound = (setSearching, setFound, setRepos) => (response) => {
  setRepos(response.data.map(parseRepo));
  setFound(true);
  setTimeout(() => setSearching(false), 700);
};

const handleReposNotFound = (setSearching, setFound, setRepos) => () => {
  setRepos([]);
  setFound(false);
  setTimeout(() => setSearching(false), 700);
};

const reposAPI = {
  search: (login, setSearching, setFound, setRepos) => (
    axios
      .get(`https://api.github.com/users/${login}/repos`)
      .then(handleReposFound(setSearching, setFound, setRepos))
      .catch(handleReposNotFound(setSearching, setFound, setRepos))
  ),
};

export default reposAPI;
