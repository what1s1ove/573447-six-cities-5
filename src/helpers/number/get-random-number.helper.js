const getRandomNumber = (min, max, fractionalPartCount = 0) => {
  const randomNumber = Number(
      (Math.random() * (max - min + 1) + min).toFixed(fractionalPartCount)
  );

  return randomNumber;
};

export {getRandomNumber};
