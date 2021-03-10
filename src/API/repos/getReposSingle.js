import get from '../shared/get';

const parseRepo = (repoData) => ({
  name: repoData.name,
  description: repoData.description,
  forked: repoData.fork,
  url: repoData.url,
});

const getReposSingle = (login, repoName, setSearching, setFound, setRepos) => (
  get(
    `https://api.github.com/repos/${login}/${repoName}`,
    setSearching,
    setFound,
    setRepos,
    parseRepo,
  )
);

export default getReposSingle;
