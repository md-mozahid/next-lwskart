import { getDictionaries } from '@/app/[lang]/dictionaries/getDictionaries'
import Image from 'next/image'

export default async function Features({lang}) {
  const dictionary = await getDictionaries(lang)
  return (
    <div className="container py-16">
      <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <Image
            src="/images/icons/delivery-van.svg"
            alt="Delivery"
            className="w-12 h-12 object-contain"
            width={500}
            height={500}
          />
          <div>
            <h4 className="font-medium capitalize text-lg">
              {dictionary?.feature_title1}
            </h4>
            <p className="text-gray-500 text-sm">{dictionary?.feature_desc3}</p>
          </div>
        </div>
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <Image
            src="/images/icons/money-back.svg"
            alt="Delivery"
            className="w-12 h-12 object-contain"
            width={500}
            height={500}
          />
          <div>
            <h4 className="font-medium capitalize text-lg">
              {dictionary?.feature_title2}
            </h4>
            <p className="text-gray-500 text-sm">{dictionary?.feature_desc2}</p>
          </div>
        </div>
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <Image
            src="/images/icons/service-hours.svg"
            alt="Delivery"
            className="w-12 h-12 object-contain"
            width={500}
            height={500}
          />
          <div>
            <h4 className="font-medium capitalize text-lg">
              {dictionary?.feature_title3}
            </h4>
            <p className="text-gray-500 text-sm">{dictionary?.feature_desc1}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
