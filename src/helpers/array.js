const getSortedItems = (items, compareFn) => {
  const sortedItems = items.slice().sort(compareFn);

  return sortedItems;
};

export {getSortedItems};
