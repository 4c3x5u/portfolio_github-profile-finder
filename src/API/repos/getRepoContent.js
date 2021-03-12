import get from '../shared/get';

const parseBlob = (login, name) => (blobData) => ({
  name: blobData.name,
  url: `/${login}/repos/${name}/${blobData.name}`,
  size: blobData.size,
  type: blobData.type,
});

const getRepoContent = (login, name, setSearching, setFound, setContent) => {
  const repoName = name.substring(0, name.indexOf('/')) || name;
  const dirName = `/${name.substring(name.indexOf(repoName) + repoName.length)}`;
  const contentPath = dirName !== '/' ? dirName : '';
  get(
    `https://api.github.com/repos/${login}/${repoName}/contents${contentPath}?ref=master`,
    setSearching,
    setFound,
    setContent,
    parseBlob(login, name),
    false,
  );
};

export default getRepoContent;
