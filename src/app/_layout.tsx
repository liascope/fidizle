import { Slot } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import HomeHeader from './components/HomeHeader'
import Search from './components/Search'
import Footer from './components/Footer'
import { styles } from './styles/global'
import { SearchProvider, useSearch } from './context/SearchContext'

function AppLayout() {
  const { query, setQuery } = useSearch()

  return (
    <LinearGradient colors={['#090909', '#260909', '#090909']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.container}>
      <HomeHeader>
        <Search query={query} setQuery={setQuery} />
      </HomeHeader>

      <Slot />

      <Footer />
    </LinearGradient>
  )
}

export default function RootLayout() {
  return (
    <SearchProvider>
      <AppLayout />
    </SearchProvider>
  )
}
