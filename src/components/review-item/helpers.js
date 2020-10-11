const getFormattedDate = (date) => {
  const formattedDate = date.toLocaleDateString(`en-US`, {
    month: `long`,
    year: `numeric`,
  });

  return formattedDate;
};

export {getFormattedDate};
