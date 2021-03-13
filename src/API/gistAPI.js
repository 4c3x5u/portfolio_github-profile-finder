import get from "./shared/get";

export const getGistList = (login, setSearching, setFound, setGists) => (
  get(
    `https://api.github.com/users/${login}/gists`,
    setSearching,
    setFound,
    setGists,
    (gistData) => ({
      name: gistData.description || "[No Name]",
      url: gistData.html_url,
    }),
    false,
  )
);

export default {
  getGistList,
};
