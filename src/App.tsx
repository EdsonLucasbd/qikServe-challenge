import { useQuery } from '@tanstack/react-query'
import { Layout } from './components/Layout'
import { Venue } from './types/venue'
import { SearchInput } from './components/SearchInput'
import { useDispatch } from 'react-redux'
import { setWebSettings } from './features/webSettings/webSettingsSlice'
import { Sections } from './components/Section/Sections'

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
  const dispatch = useDispatch()

  const { data, isPending, isError, error } = useRestaurantDetails()


  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  dispatch(setWebSettings(data?.webSettings));

  return (
    <Layout headerColor={data?.webSettings.navBackgroundColour}>
      <div className='w-full h-[158px] lg:h-[150px] bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${data?.webSettings.bannerImage})` }}></div>
      <SearchInput />
      <div className="flex w-full px-4">
        <Sections />
      </div>
    </Layout>
  )
}

export default App
