import get from '../shared/get';

const parseRepo = (repoData) => ({
  name: repoData.name,
  url: repoData.url,
});

const getReposList = (login, setSearching, setFound, setRepos) => (
  get(
    `https://api.github.com/users/${login}/repos`,
    setSearching,
    setFound,
    setRepos,
    parseRepo,
    false,
  )
);

export default getReposList;
