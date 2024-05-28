export const getProductStock = (stock, sold) => {
  console.log('stock', stock)
  if (stock > sold) {
    return 'In Stock'
  } else {
    return 'Out of Stock'
  }
}
