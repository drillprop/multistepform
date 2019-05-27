export const atLeastOneTrue = obj => {
  return Object.values(obj).some(Boolean);
};
export const everyoneTrue = obj => {
  return Object.values(obj).every(Boolean);
};
