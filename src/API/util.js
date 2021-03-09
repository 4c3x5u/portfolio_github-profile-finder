export const handleItemsFound = (
  setSearching, setFound, setItems, parseItem,
) => (
  response,
) => {
  setItems(response.data.map(parseItem));
  setFound(true);
  setTimeout(() => setSearching(false), 700);
};

export const handleItemsNotFound = (setSearching, setFound, setItems) => () => {
  setItems([]);
  setFound(false);
  setTimeout(() => setSearching(false), 700);
};
