import get from "./shared/get";

export const getGistList = (login) => (setSearching, setFound, setGists) => (
  get(
    `https://api.github.com/users/${login}/gists`,
    setSearching,
    setFound,
    setGists,
    (res) => ({
      name: res.description || "[No Name]",
      url: res.html_url,
    }),
    false,
  )
);

export const getGist = (id) => (setSearching, setFound, setGists) => (
  get(
    `https://api.github.com/gists/${id}`,
    setSearching,
    setFound,
    setGists,
    (res) => ({
      name: res.description || "[No Name]",
      content: res.content,
    }),
    true,
  )
);

export default {
  getGistList,
};
