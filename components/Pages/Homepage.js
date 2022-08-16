import { useState } from 'react'
import Card from './../Card'
import { SearchBox } from './../SearchBox'
export default function Homepage({ data }) {
  const [searchField, setSearchField] = useState('')
  const filterProducts = data.filter((data) =>
    searchField
      ? data.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      : data,
  )

  return (
    <Container>
      <h1 className=' lg:px-8 w-full font-semibold text-5xl'>TV shows</h1>

      <SearchBox
        search={(e) => setSearchField(e.target.value)}
        placeholder="Search for TV shows "
      />
      {filterProducts.map((data, index) => (
        <>
          <Card 
            key={index}
            image={data.image.original}
            name={data.name}
            slug={data.id}
          />
        </>
      ))}
    </Container>
  )
}

function Container({ children }) {
  return (
    <div className=" mx-auto px-2 md:px-6 flex flex-wrap gap-1 sm:gap-6 items-center justify-center my-4">
      {children}
    </div>
  )
}
