import Image from 'next/image'
import Link from 'next/link'

export default function Card({ image, name, slug }) {
  const shortName = name.substr(0, 12)
  // let smName, lgName
  function textSize(name, size) {
    let newName
    return name.length >= size
      ? (newName = shortName + '...')
      : (newName = name)
  }
  return (
    <>
      <Link href={'/' + slug}>
        <a className="  overflow-hidden  flex flex-col items-center p-2 w-[158px]  sm:w-[178px]     ">
          {/* <a className="  overflow-hidden  flex flex-col items-center p-2  bg-white  "> */}
          <div className="p-6 relative h-[210px]  sm:h-[237px] w-full bg-blue-100 overflow-hidden   transition-all   ">
            <Image
              src={image}
              className="hover:scale-125 transition-all duration-300"
              layout="fill"
              object="cover"
            />
          </div>
          <div className="px-4 py-2">
            <div className="font-semibold text-lg mb-1 sm:hidden ">
              {textSize(name, 5)}
            </div>
            <div className="font-semibold text-lg mb-1 hidden sm:flex">
              {textSize(name, 10)}
            </div>
          </div>
        </a>
      </Link>
    </>
  )
}
