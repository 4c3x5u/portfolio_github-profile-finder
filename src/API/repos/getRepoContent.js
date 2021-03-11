import get from '../shared/get';

const parseFile = (fileData) => ({
  name: fileData.name,
  url: fileData.url,
  size: fileData.size,
  type: fileData.type,
  children: fileData.type === 'dir' ? [] : undefined,
});

const getRepoContent = (login, repoName, setSearching, setFound, setContent) => (
  get(
    `https://api.github.com/repos/${login}/${repoName}/content`,
    setSearching,
    setFound,
    setContent,
    parseFile,
    false,
  )
);

export default getRepoContent;
