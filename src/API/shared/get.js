import axios from 'axios';

const handleFound = (
  setSearching, setFound, setItems, parseItem,
) => (
  response,
) => {
  setItems(response.data.map(parseItem));
  setFound(true);
  setTimeout(() => setSearching(false), 700);
};

const handleNotFound = (setSearching, setFound, setItems) => () => {
  setItems([]);
  setFound(false);
  setTimeout(() => setSearching(false), 700);
};

const get = (url, setSearching, setFound, setItems, parseItem) => (
  axios
    .get(url)
    .then(handleFound(setSearching, setFound, setItems, parseItem))
    .catch(handleNotFound(setSearching, setFound, setItems))
);

export default get;
