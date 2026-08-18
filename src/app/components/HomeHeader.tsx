import { Text, View, useWindowDimensions, Image } from 'react-native'
import { usePathname, Link } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import { styles, colors } from '../styles/global'
import { LinearGradient } from 'expo-linear-gradient'

export default function HomeHeader({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { width } = useWindowDimensions()
  const isMobile = width < 700

  return (
    <LinearGradient colors={['#080808', '#4A1518', '#080808']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.navBar}>
      <View style={[styles.filmHoles, styles.filmHolesTop]}>
        {Array.from({ length: 22 }).map((_, i) => (
          <View key={i} style={styles.filmHole} />
        ))}
      </View>

      <View style={styles.navBarContent}>
        {/* Logo */}

        <Link href="/">
          <View style={styles.logo}>
            <Image source={require('@/assets/clapboard.png')} style={styles.logoIcon}></Image>
            <Text style={styles.logoTitle}>fidizle</Text>
          </View>
        </Link>

        {children}
        {isMobile ? (
          <View style={styles.mobileMenu}>
            <Link href="/movies" asChild style={styles.mobileMenuButton}>
              <View style={pathname === '/movies' && styles.mobileMenuButtonActive}>
                <Ionicons name="film-outline" size={20} color={pathname === '/movies' ? colors.primary : colors.text} />
              </View>
            </Link>

            <Link href="/series" asChild style={styles.mobileMenuButton}>
              <View style={pathname === '/series' && styles.mobileMenuButtonActive}>
                <Ionicons name="tv-outline" size={20} color={pathname === '/series' ? colors.primary : colors.text} />
              </View>
            </Link>
          </View>
        ) : (
          <View style={styles.navigation}>
            <Link href="/movies" asChild style={styles.navButton}>
              <View style={pathname === '/movies' && styles.navButtonActive}>
                <Ionicons name="film-outline" size={18} color={pathname === '/movies' ? colors.primary : colors.text} />

                <Text style={[styles.navText, pathname === '/movies' && styles.navTextActive]}>Movies</Text>
              </View>
            </Link>

            <Link href="/series" asChild style={styles.navButton}>
              <View style={pathname === '/series' && styles.navButtonActive}>
                <Ionicons name="tv-outline" size={18} color={pathname === '/series' ? colors.primary : colors.text} />

                <Text style={[styles.navText, pathname === '/series' && styles.navTextActive]}>Series</Text>
              </View>
            </Link>
          </View>
        )}
      </View>

      <View style={[styles.filmHoles, styles.filmHolesBottom]}>
        {Array.from({ length: 22 }).map((_, i) => (
          <View key={i} style={styles.filmHole} />
        ))}
      </View>
    </LinearGradient>
  )
}
