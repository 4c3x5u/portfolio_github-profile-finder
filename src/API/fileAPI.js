import get from "./shared/get";

export const getFile = (login, repoName, filePath) => (setSearching, setFound, setFollowers) => (
  get(
    `https://api.github.com/repos/${login}/${repoName}/contents/${filePath}?ref=master`,
    setSearching,
    setFound,
    setFollowers,
    (res) => ({ content: atob(res.content) }),
    true,
  )
);

export default {
  getFile,
};
