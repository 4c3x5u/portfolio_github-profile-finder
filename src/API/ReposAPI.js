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

export const getReposForUser = (reposUrl, handleSuccess, handleFailure) => {
  axios
    .get(reposUrl)
    .then(handleSuccess)
    .catch(handleFailure);
};
