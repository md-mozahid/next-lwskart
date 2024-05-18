export default function FilterCategory({ category }) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        name="cat-1"
        id="cat-1"
        className="text-primary focus:ring-0 rounded-sm cursor-pointer"
      />
      <button className="text-gray-600 ml-3 cursor-pointer uppercase">
        {category}
      </button>
      <div className="ml-auto text-gray-600 text-sm">(10)</div>
    </div>
  )
}
