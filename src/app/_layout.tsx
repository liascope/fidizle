import { Slot } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import HomeHeader from './components/HomeHeader'
import Search from './components/Search'
import Footer from './components/Footer'
import { styles } from './styles/global'
import { ScrollView } from 'react-native'

import { SearchProvider, useSearch } from './context/SearchContext'
import SearchResults from './components/SearchResults'

function AppLayout() {
  const { query, setSearchQuery } = useSearch()

  return (
    <LinearGradient colors={['#090909', '#260909', '#090909']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.container}>
      <ScrollView style={styles.homeContent} contentContainerStyle={styles.homeContentContainer} showsVerticalScrollIndicator={false}>
        <HomeHeader>
          <Search query={query} setSearchQuery={setSearchQuery} />
        </HomeHeader>
        {query.trim().length > 0 ? <SearchResults query={query} /> : <Slot />}
      </ScrollView>
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
