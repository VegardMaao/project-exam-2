export const formatDate = (string) => {
  return string.substring(0, 10).split("-").reverse().join(".");
};