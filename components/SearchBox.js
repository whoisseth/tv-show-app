import { IoMdSearch } from 'react-icons/io'
import classnames from 'classnames'

export const SearchBox = ({
  search,
  className,
  placeholder = '"Search for Products, Brands and More   "',
}) => {
  return (
    <div className={classnames(' flex w-full items-center justify-center ')}>
      <div
        className={classnames(
          'mx-4  gap-1 items-center text-white font-poppins  bg-white rounded-lg overflow-hidden px-2 max-w-xl  border-2 border-gray-600  w-full  flex    ',
          className,
        )}
      >
        <IoMdSearch className="text-xl text-gray-400 cursor-pointer " />
        <input
          onChange={search}
          type="text"
          placeholder={placeholder}
          className="flex  mb-2 w-full px-2  outline-none  placeholder:text-gray-400 placeholder:text-sm  text-black   my-2 "
        />
      </div>
    </div>
  )
}
