const getRandomNumber = (min, max, fractionalPartCount = 0) => {
  const randomNumber = min + Math.random() * (max + 1 - min);

  return fractionalPartCount
    ? Number(randomNumber.toFixed(fractionalPartCount))
    : Math.floor(randomNumber);
};

export {getRandomNumber};
