import get from "../shared/get";

const getFile = (url, setSearching, setFound, setFollowers) => (
  get(
    url,
    setSearching,
    setFound,
    setFollowers,
    (content) => ({ content }),
    false,
  )
);

export default getFile;
