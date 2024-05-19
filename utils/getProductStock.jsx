export const getProductStock = (sku, sold) => {
  if (sku > sold) {
    return "In Stock";
  }
  return "Out of Stock";
};
