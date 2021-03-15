import axios from "axios";

const pta = process.env.REACT_APP_PERSONAL_ACCESS_TOKEN;

const handleFound = (setSearching, setFound, setItems, parseItem, isSingle) => (res) => {
  setItems(isSingle ? parseItem(res.data) : res.data.map(parseItem));
  setFound(true);
  setSearching(false);
};

const handleNotFound = (setSearching, setFound, setItems) => () => {
  setItems([]);
  setFound(false);
  setSearching(false);
};

const get = (url, setSearching, setFound, setItems, parseItem, isSingle) => (
  axios
    .get(url, { headers: { Authorization: `token ${pta}` } })
    .then(handleFound(setSearching, setFound, setItems, parseItem, isSingle))
    .catch(handleNotFound(setSearching, setFound, setItems))
);

export default get;
