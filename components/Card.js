import Image from 'next/image'
import Link from 'next/link'

export default function Card({ image, name, slug }) {
  const shortName = name.substr(0, 12)
  let newName
  name.length >= 25 ? (newName = shortName + '...') : (newName = name)
  return (
    <>
      <Link href={'/' + slug}>
        <a className=" bg-white overflow-hidden  flex flex-col items-center p-2   ">
          <div className="p-6 relative h-[237px] w-[178px] bg-blue-100 overflow-hidden   transition-all   ">
            <Image
              src={image}
              className="hover:scale-125 transition-all duration-300"
              layout="fill"
              object="cover"
            />
          </div>
          <div className="px-4 py-2">
            <div className="font-semibold text-lg mb-1">{newName}</div>
          </div>
        </a>
      </Link>
    </>
  )
}
