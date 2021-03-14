import get from "./shared/get";

export const getRepoList = (login) => (setSearching, setFound, setRepos) => (
  get(
    `https://api.github.com/users/${login}/repos`,
    setSearching,
    setFound,
    setRepos,
    (res) => ({
      name: res.name,
      url: `/${login}/repos/${res.name}`,
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
    (response) => ({
      name: response.name,
      fullName: response.full_name,
      description: response.description,
      forked: response.fork,
      url: response.html_url,
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
    (res) => ({
      name: res.name,
      url:
        res.type === "dir"
          ? `/${login}/repos/${name}/${res.name}`
          : `/${login}/repos/${repoName}/file/${res.path}`,
      size: res.size,
      type: res.type,
    }),
    false,
  );
};

export default {
  getRepoList,
  getRepo,
  getRepoContent,
};
