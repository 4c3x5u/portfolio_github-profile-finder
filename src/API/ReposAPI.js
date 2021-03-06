import axios from 'axios';

const parseRepo = (reposResponseData) => ({
  name: reposResponseData.name,
  description: reposResponseData.description || '[ No Description ]',
});

export const handleReposFound = (setRepos, setReposFound) => (reposResponse) => {
  const repos = reposResponse.data.map(parseRepo);
  setRepos(repos);
  setReposFound(true);
};

export const handleReposNotFound = (setRepos, setReposFound) => () => {
  setRepos([]);
  setReposFound(false);
};

export const getReposForUser = (userLogin, handleSuccess, handleFailure) => {
  axios
    .get(`https://api.github.com/users/${userLogin}/repos`)
    .then(handleSuccess)
    .catch(handleFailure);
};
