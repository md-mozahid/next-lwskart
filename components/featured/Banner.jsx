import { getDictionaries } from '@/app/[lang]/dictionaries/getDictionaries'
import Link from 'next/link'

export default async function Banner({ lang }) {
  const dictionary = await getDictionaries(lang)
  return (
    <div className="bg-cover bg-no-repeat bg-center py-36 bg-[url('/images/banner-bg.jpg')]">
      <div className="container">
        <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize">
          {dictionary?.title1} <br /> {dictionary?.title2}
        </h1>

        {dictionary?.hero_desc ? (
          <p>{dictionary?.hero_desc}</p>
        ) : (
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam{' '}
            <br />
            accusantium perspiciatis, sapiente magni eos dolorum ex quos dolores
            odio
          </p>
        )}

        <div className="mt-12">
          <Link
            href="#"
            className="bg-primary border border-primary text-white px-8 py-3 font-medium 
                    rounded-md hover:bg-transparent hover:text-primary">
            {dictionary?.hero_btn}
          </Link>
        </div>
      </div>
    </div>
  )
}
