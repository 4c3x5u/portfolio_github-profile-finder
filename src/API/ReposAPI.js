import axios from 'axios';

const parseRepo = (reposResponseData) => ({
  name: reposResponseData.name,
  description: reposResponseData.description || '[ No Description ]',
});

const handleReposFound = (
  setLoading,
  setReposFound,
  setRepos,
) => (
  reposResponse,
) => {
  setRepos(reposResponse.data.map(parseRepo));
  setReposFound(true);
  setTimeout(() => setLoading(false), 700);
};

const handleReposNotFound = (setLoading, setReposFound, setRepos) => () => {
  setRepos([]);
  setReposFound(false);
  setTimeout(() => setLoading(false), 700);
};

const reposAPI = {
  get: (login, setLoading, setReposFound, setRepos) => (
    axios
      .get(`https://api.github.com/users/${login}/repos`)
      .then(handleReposFound(setLoading, setReposFound, setRepos))
      .catch(handleReposNotFound(setLoading, setReposFound, setRepos))
  ),
};

export default reposAPI;
