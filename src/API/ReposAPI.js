import axios from 'axios';

const parseRepo = (reposResponseData) => ({
  name: reposResponseData.name,
  description: reposResponseData.description || '[ No Description ]',
});

export const handleReposFound = (setReposFound, setRepos) => (reposResponse) => {
  const repos = reposResponse.data.map(parseRepo);
  setRepos(repos);
  setReposFound(true);
};

export const handleReposNotFound = (setReposFound, setRepos) => () => {
  setRepos([]);
  setReposFound(false);
};

export const getReposForUser = (reposUrl, handleSuccess, handleFailure) => {
  axios
    .get(reposUrl)
    .then(handleSuccess)
    .catch(handleFailure);
};
