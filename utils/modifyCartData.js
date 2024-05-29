const modifyCartData = (items) => {
  const resData = items.map((item) => {
    return {
      id: item._id.toString(),
      productId: item.productId.toString(),
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      thumbnail: item.thumbnail,
      stock: item.stock,
    }
  })

  return resData
}

// use at cart item remove
