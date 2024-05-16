import Image from 'next/image'
import Link from 'next/link'

export default function CategoryCard({category}) {
  return (
    <div className="relative rounded-sm overflow-hidden group h-[300px]">
      <Image
        src={category?.thumbnail}
        alt={category?.title}
        className="w-full"
        width={500}
        height={500}
      />
      <Link
        href="#"
        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
        {category?.title}
      </Link>
    </div>
  )
}
