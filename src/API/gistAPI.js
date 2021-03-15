import get from "./shared/get";

export const getGistList = (login) => (setSearching, setFound, setGists) => (
  get(
    `https://api.github.com/users/${login}/gists`,
    setSearching,
    setFound,
    setGists,
    (res) => ({
      name: res.description || "[No Title]",
      url: `/${login}/gists/${res.id}`,
    }),
    false,
  )
);

export const getGistFiles = (login, id) => (setSearching, setFound, setGists) => (
  get(
    `https://api.github.com/gists/${id}`,
    setSearching,
    setFound,
    setGists,
    (res) => ({
      files: Object.entries(res.files).map(([key]) => ({
        name: key,
        url: `/${login}/gists/${id}/${key}`,
      })),
    }),
    true,
  )
);

export default {
  getGistList,
  getGistFiles,
};
