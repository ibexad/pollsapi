export const getQuestionId = url => {
  return url.substring(url.lastIndexOf("/") + 1);
};

export const getDate = date => {
  return new Date(date).toLocaleString();
};
