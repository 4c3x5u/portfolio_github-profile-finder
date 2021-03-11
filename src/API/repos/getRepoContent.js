import get from '../shared/get';

const parseBlob = (blobData) => ({
  name: blobData.name,
  url: blobData.url,
  size: blobData.size,
  type: blobData.type,
  children: [],
});

const getRepoContent = (login, repoName, setSearching, setFound, setContent) => (
  get(
    `https://api.github.com/repos/${login}/${repoName}/content`,
    setSearching,
    setFound,
    setContent,
    parseBlob,
    false,
  )
);

export default getRepoContent;
