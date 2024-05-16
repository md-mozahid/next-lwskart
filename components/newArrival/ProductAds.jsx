import Image from 'next/image'
import Link from 'next/link'

export default function ProductAds() {
  return (
    <div className="container pb-16">
      <Link href="#">
        <Image
          src="/images/offer.jpg"
          alt="ads"
          className="w-full"
          width={500}
          height={500}
        />
      </Link>
    </div>
  )
}
