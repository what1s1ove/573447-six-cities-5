const generateRandomId = () => {
  const randomId = Date.now() + parseInt(String(Math.random() * 10000), 10).toString();

  return randomId;
};

export {generateRandomId};
