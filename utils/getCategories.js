// find category name in array
export const findUniqueCategoryName = (value) => {
  const uniqueCategories = new Set()
  value.forEach((item) => {
    uniqueCategories.add(item.category)
  })
  const uniqueCategoryName = [...uniqueCategories]
  return uniqueCategoryName
}
