export const getProductStock = (sku, sold) => {
  if (sku > sold) {
    return 'In Stock'
  } else {
    return 'Out of Stock'
  }
}
