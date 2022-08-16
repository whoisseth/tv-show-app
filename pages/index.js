import Homepage from './../components/Pages/Homepage'
export default function Home({ data }) {
  return (
    <>
      <Homepage data={data} />
    </>
  )
}

export async function getServerSideProps() {
  const URL = 'https://api.tvmaze.com/shows'
  const res = await fetch(URL)
  const data = await res.json()
  return { props: { data } }
}
