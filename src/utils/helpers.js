export const atLeastOneTrue = obj => {
  return Object.values(obj).some(Boolean);
};
export const everyoneTrue = obj => {
  return Object.values(obj).every(Boolean);
};

export const capitalize = string => {
  const splitedToWords = string.split(' ');
  const capitalizeFirstLetter = splitedToWords.map(word => {
    const letters = word.split('');
    const capitalized = [letters[0].toUpperCase(), ...letters.slice(1)].join(
      ''
    );
    return capitalized;
  });
  return capitalizeFirstLetter.join(' ');
};
