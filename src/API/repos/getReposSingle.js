import get from '../shared/get';

const parseRepo = (repoData) => ({
  name: repoData.name,
  description: repoData.description || 'No Description',
  forked: repoData.fork,
  url: repoData.html_url,
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
