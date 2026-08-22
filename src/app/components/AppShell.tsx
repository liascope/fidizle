import { View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useSearch } from '../context/SearchContext'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import HomeHeader from './HomeHeader'
import Search from './Search'
import DesktopNavigation from './DesktopNavigation'
import useResponsive from '../hooks/useResponsive'

export default function AppShell({ children }: { children: React.ReactNode }) {
  const { query, setSearchQuery } = useSearch()
  const insets = useSafeAreaInsets()
  const isDesktop = useResponsive()

  return (
    <LinearGradient
      colors={['#090909', '#260909', '#090909']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{
        flex: 1,
        paddingTop: insets.top,
      }}
    >
      <HomeHeader>
        <Search query={query} setSearchQuery={setSearchQuery} />
        {isDesktop && <DesktopNavigation />}
      </HomeHeader>
      <View style={{ flex: 1 }}>{children}</View>
    </LinearGradient>
  )
}
