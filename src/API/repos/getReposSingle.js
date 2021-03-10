import get from '../shared/get';

const parseRepo = (repoData) => ({
  name: repoData.name,
  description: repoData.description,
  forked: repoData.fork,
  url: repoData.url,
});

const getReposSingle = (login, name, setSearching, setFound, setRepos) => (
  get(
    `https://api.github.com/repos/${login}/${name}`,
    setSearching,
    setFound,
    setRepos,
    parseRepo,
    true,
  )
);

export default getReposSingle;
