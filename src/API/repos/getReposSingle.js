import get from '../shared/get';

const parseRepo = (login) => (repoData) => ({
  name: repoData.name,
  description: repoData.description,
  forked: repoData.fork,
  url: `${login}/repos/${repoData.name}`,
});

const getReposSingle = (login, name, setSearching, setFound, setRepos) => (
  get(
    `https://api.github.com/repos/${login}/${name}`,
    setSearching,
    setFound,
    setRepos,
    parseRepo(login),
    true,
  )
);

export default getReposSingle;
