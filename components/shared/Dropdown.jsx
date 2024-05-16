import Image from 'next/image'

export default function Dropdown() {
  return (
    <div
      className="absolute left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible w-[600px]"
      style={{ width: '300px' }}>
      <a
        href="#"
        className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
        <Image
          src="/images/icons/sofa.svg"
          alt="sofa"
          className="w-5 h-5 object-contain"
          width={32}
          height={32}
        />
        <span className="ml-6 text-gray-600 text-sm">Sofa</span>
      </a>
      <a
        href="#"
        className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
        <Image
          src="/images/icons/terrace.svg"
          alt="terrace"
          className="w-5 h-5 object-contain"
          width={32}
          height={32}
        />
        <span className="ml-6 text-gray-600 text-sm">Living Room</span>
      </a>
      <a
        href="#"
        className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
        <Image
          src="/images/icons/bed.svg"
          alt="bed"
          className="w-5 h-5 object-contain"
          width={32}
          height={32}
        />
        <span className="ml-6 text-gray-600 text-sm">Bedroom</span>
      </a>
      <a
        href="#"
        className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
        <Image
          src="/images/icons/office.svg"
          alt="Outdoor"
          className="w-5 h-5 object-contain"
          width={32}
          height={32}
        />
        <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
      </a>
      <a
        href="#"
        className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
        <Image
          src="/images/icons/outdoor-cafe.svg"
          alt="outdoor"
          className="w-5 h-5 object-contain"
          width={32}
          height={32}
        />
        <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
      </a>
      <a
        href="#"
        className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
        <Image
          src="/images/icons/bed-2.svg"
          alt="Mattress"
          className="w-5 h-5 object-contain"
          width={32}
          height={32}
        />
        <span className="ml-6 text-gray-600 text-sm">Mattress</span>
      </a>
    </div>
  )
}
