const extendObject = (objectA, objectB) => {
  const extendedObject = Object.assign({}, objectA, objectB);

  return extendedObject;
};

export {extendObject};
