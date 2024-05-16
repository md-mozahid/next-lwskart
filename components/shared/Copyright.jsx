import Image from 'next/image'

export default function Copyright() {
  return (
    <div className="bg-gray-800 py-4">
      <div className="container flex items-center justify-between">
        <p className="text-white">&copy; TailCommerce - All Right Reserved</p>
        <div>
          <Image
            src="/images/methods.png"
            alt="methods"
            className="h-5"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  )
}
