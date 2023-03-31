export const shortenAddress = (text) => {
  const address =
    text.slice(0, 5) + "..." + text.slice(text.length - 5, text.length);
  return address;
};
