import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/images/logo.svg"
        alt="Logo"
        className="w-32"
        width={32}
        height={32}
      />
    </Link>
  )
}
