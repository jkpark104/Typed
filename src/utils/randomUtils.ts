export const getRandomMillisecond = () => {
  return Math.floor(Math.random() * 700) + 300;
};

export const getRandomValidation = () => {
  return Math.random() < 0.8;
};
