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

export default {
  getGistList,
};
