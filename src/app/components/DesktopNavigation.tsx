import { Text, View, StyleSheet } from 'react-native'
import { Link, usePathname } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'

import { colors } from '../styles/global'

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

const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.black400,
    borderRadius: 100,
    padding: 4,
    borderWidth: 1,
    borderColor: colors.border,
  },

  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    minWidth: 105,
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderRadius: 100,
  },

  navButtonActive: {
    backgroundColor: colors.darkRed100,
    borderWidth: 1,
    borderColor: colors.primary,
  },

  navText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textDark,
    letterSpacing: 0.3,
  },

  navTextActive: {
    color: colors.primary,
    fontWeight: '700',
  },
})
