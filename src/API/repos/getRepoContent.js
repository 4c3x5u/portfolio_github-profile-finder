const parseFile = (fileData) => ({
  name: fileData.name,
  url: fileData.url,
  size: fileData.size,
  type: fileData.type,
  children: fileData.type === 'dir' ? [] : undefined,
});
