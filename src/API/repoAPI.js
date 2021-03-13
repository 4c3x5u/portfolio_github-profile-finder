import get from "./shared/get";

export const getRepoList = (login) => (setSearching, setFound, setRepos) => (
  get(
    `https://api.github.com/users/${login}/repos`,
    setSearching,
    setFound,
    setRepos,
    (repoData) => ({
      name: repoData.name,
      url: `/${login}/repos/${repoData.name}`,
    }),
    false,
  )
);

export const getRepo = (login, name) => (setSearching, setFound, setRepos) => (
  get(
    `https://api.github.com/repos/${login}/${name}`,
    setSearching,
    setFound,
    setRepos,
    (repoData) => ({
      name: repoData.name,
      fullName: repoData.full_name,
      description: repoData.description,
      forked: repoData.fork,
      url: repoData.html_url,
    }),
    true,
  )
);

export const getRepoContent = (login, name) => (setSearching, setFound, setContent) => {
  const repoName = name.substring(0, name.indexOf("/")) || name;
  const dirName = `/${name.substring(name.indexOf("content") + "content".length + 1)}`;
  const contentPath = dirName !== "/" ? dirName : "";
  get(
    `https://api.github.com/repos/${login}/${repoName}/contents${contentPath}?ref=master`,
    setSearching,
    setFound,
    setContent,
    (blobData) => ({
      name: blobData.name,
      url: `/${login}/repos/${name}/${blobData.name}`,
      size: blobData.size,
      type: blobData.type,
    }),
    false,
  );
};

export default {
  getRepoList,
  getRepo,
  getRepoContent,
};
