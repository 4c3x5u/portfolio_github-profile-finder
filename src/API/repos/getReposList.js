import get from '../shared/get';

const parseRepo = (login) => (repoData) => ({
  name: repoData.name,
  url: `/${login}/repos/${repoData.name}`,
});

const getReposList = (login, setSearching, setFound, setRepos) => (
  get(
    `https://api.github.com/users/${login}/repos`,
    setSearching,
    setFound,
    setRepos,
    parseRepo(login),
    false,
  )
);

export default getReposList;
