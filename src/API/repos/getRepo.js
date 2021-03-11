import get from '../shared/get';

const parseRepo = (repoData) => ({
  name: repoData.name,
  description: repoData.description,
  forked: repoData.fork,
  url: repoData.html_url,
});

const getRepo = (login, name, setSearching, setFound, setRepos) => (
  get(
    `https://api.github.com/repos/${login}/${name}`,
    setSearching,
    setFound,
    setRepos,
    parseRepo,
    true,
  )
);

export default getRepo;
