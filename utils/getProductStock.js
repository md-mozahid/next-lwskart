export const getProductStock = (stock, sold) => {
  // console.log('stock', stock)
  if (stock > sold) {
    return 'In Stock'
  } else if (stock === sold) {
    return 'Out of Stock'
  }
}
