import { IoIosArrowBack } from 'react-icons/io'
import Link from 'next/dist/client/link'
import { BiCategory } from 'react-icons/bi'
import Image from 'next/image'
import ReactHtmlParser from 'react-html-parser'

export default function TvShowDetailsPage({ data }) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-4 sm:mb-10 ">
      <BackButton />
      <div className="px-4 sm:px-6 sm:flex  gap-4 md:gap-12 sm:mt-8 sm:mx-auto max-w-6xl  items-center  justify-center  ">
        <BannerImage img={data.image.original} />
        <ProductDesc data={data} />
      </div>
    </div>
  )
}

function BackButton() {
  return (
    <Link href="/">
      <a className=" ml-5 my-8 flex rounded-full px-3 bg-gray-300 h-10 w-10  items-center justify-center transition-all  hover:shadow-md ">
        <IoIosArrowBack className="text-3xl -ml-2 " />
      </a>
    </Link>
  )
}

function BannerImage({ className, img }) {
  return (
    <div className={className}>
      <div className="relative h-[366px] w-[275px]    overflow-hidden  mx-auto sm:mx-0">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
    </div>
  )
}

function ProductDesc({ data }) {
  return (
    <div className="mx-auto sm:mx-0 max-w-sm sm:ml-4">
      <h2 className="text-2xl font-semibold mt-2">{data.name}</h2>
      <div className="mb-4 flex justify-between items-center">
        <p className="uppercase font-bold   flex items-center gap-1">
          {/* <BiCategory /> */}
          <span> {data.category}</span>
        </p>
      </div>
      <desc>{ReactHtmlParser(data.summary)}</desc>
      <section className="flex justify-between items-center mt-4">
        <span className="text-sm text-[#007185]">
          {data.rating.average} ratings
        </span>
      </section>
    </div>
  )
}
