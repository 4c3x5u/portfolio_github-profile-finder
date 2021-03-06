import axios from 'axios';

const parseRepo = (reposResponseData) => ({
  name: reposResponseData.name,
  description: reposResponseData.description || '[ No Description ]',
});

const handleReposFound = (setRepos, setReposFound) => (reposResponse) => {
  const repos = reposResponse.data.map(parseRepo);
  setRepos(repos);
  setReposFound(true);
};

const handleReposNotFound = (setRepos, setReposFound) => () => {
  setRepos([]);
  setReposFound(false);
};

const reposAPI = {
  get: (login, setRepos, setReposFound) => (
    axios
      .get(`https://api.github.com/users/${login}/repos`)
      .then(handleReposFound(setRepos, setReposFound))
      .catch(handleReposNotFound(setRepos, setReposFound))
  ),
};

export default reposAPI;
