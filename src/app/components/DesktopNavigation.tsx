import { Text, View } from 'react-native'
import { Link, usePathname } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'

import { colors, styles } from '../styles/global'

export default function DesktopNavigation() {
  const pathname = usePathname()

  const isMovies = pathname === '/movies'
  const isSeries = pathname === '/series'

  return (
    <View style={styles.navigation}>
      <Link href="/movies" asChild style={styles.navButton}>
        <View style={isMovies && styles.navButtonActive}>
          <Ionicons name="film-outline" size={18} color={pathname === '/movies' ? colors.primary : colors.text} />

          <Text style={[styles.navText, isMovies && styles.navTextActive]}>Movies</Text>
        </View>
      </Link>

      <Link href="/series" asChild style={styles.navButton}>
        <View style={isSeries && styles.navButtonActive}>
          <Ionicons name="tv-outline" size={18} color={isSeries ? colors.primary : colors.text} />

          <Text style={[styles.navText, isSeries && styles.navTextActive]}>Series</Text>
        </View>
      </Link>
    </View>
  )
}
