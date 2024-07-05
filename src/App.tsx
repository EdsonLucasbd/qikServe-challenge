import { useQuery } from '@tanstack/react-query'
import { Layout } from './components/Layout'
import { Venue } from './types/venue'
import { SearchInput } from './components/SearchInput'

async function getRestaurantDetails() {
  return (await fetch(`${import.meta.env.VITE_API_URL}/challenge/venue/9`).then((res) =>
    res.json()
  )) as Venue
}

function useRestaurantDetails() {
  const query = useQuery<Venue>({ queryKey: ['RestaurantDetails'], queryFn: getRestaurantDetails })

  return query
}

function App() {
  const { data, isPending, isError, error } = useRestaurantDetails()

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <Layout headerColor={data?.webSettings.navBackgroundColour}>
      <div className='w-full h-[158px] bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${data?.webSettings.bannerImage})` }}></div>
      <SearchInput />
    </Layout>
  )
}

export default App
