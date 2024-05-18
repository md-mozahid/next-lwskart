// find category name in array
export const getUniqueValueInArray = (array) => {
  const uniqueValue = new Set();
  array.forEach((item) => {
    uniqueValue.add(item.price);
  });
  const uniqueCategoryName = [...uniqueValue];
  return uniqueCategoryName;
};
