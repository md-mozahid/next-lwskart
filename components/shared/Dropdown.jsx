import { getAllCategories } from '@/database/queries'
import Image from 'next/image'
import Link from 'next/link'

export default async function Dropdown() {
  const Categories = await getAllCategories()
  return (
    <div
      className="absolute left-0 top-full md:w-[250px] bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible w-[600px] z-10">
      {Categories?.map((cat) => (
        <Link
          key={cat?.title}
          href={`/products/${cat?.title}`}
          className="flex items-center px-6 py-3 hover:bg-gray-100 transition uppercase">
          <Image
            src={cat?.thumbnail}
            alt={cat?.title}
            className="w-5 h-5 object-contain"
            width={32}
            height={32}
          />
          <span className="ml-6 text-gray-600 text-sm">{cat?.title}</span>
        </Link>
      ))}
    </div>
  )
}
