import { View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useSearch } from '../context/SearchContext'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import HomeHeader from './HomeHeader'
import DesktopNavigation from './DesktopNavigation'
import useResponsive from '../hooks/useResponsive'
import Search from './Search'
import MobileButtons from './UtilitisButtons'
import { useTheme } from '../context/ThemeContext'
import UtilitisButtons from './UtilitisButtons'

export default function AppShell({ children }: { children: React.ReactNode }) {
  const { query, setSearchQuery } = useSearch()
  const insets = useSafeAreaInsets()
  const isDesktop = useResponsive()
  const { colors } = useTheme()
  return (
    <LinearGradient
      colors={[colors.black, colors.darkRed, colors.black]}
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
      <UtilitisButtons />
      <View style={{ flex: 1 }}>{children}</View>
    </LinearGradient>
  )
}
