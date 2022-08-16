import TvShowDetailsPage from '../components/Pages/TvShowDetailsPage'

export default function Product({ data }) {
  console.log(data)
  return <TvShowDetailsPage data={data} />
}

export async function getServerSideProps({ params }) {
  const URL = `https://api.tvmaze.com/shows/${params.id}`
  const res = await fetch(URL)
  const data = await res.json()
  return {
    props: { data },
  }
}
