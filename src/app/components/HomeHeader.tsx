import { Pressable, Text, View } from 'react-native'
import { usePathname, useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import { styles, colors } from '../styles/global'
import { LinearGradient } from 'expo-linear-gradient'

export default function HomeHeader({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <LinearGradient colors={['#080808', '#4A1518', '#080808']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.navBar}>
      <View style={[styles.filmHoles, styles.filmHolesTop]}>
        {Array.from({ length: 18 }).map((_, i) => (
          <View key={i} style={styles.filmHole} />
        ))}
      </View>

      {/* Header */}
      <View style={styles.navBarContent}>
        {/* Logo */}
        <Pressable onPress={() => router.push('/')}>
          <View style={styles.logo}>
            <Text style={styles.logoIcon}>🎬</Text>
            <Text style={styles.logoTitle}>fidizle</Text>
          </View>
        </Pressable>

        {children}
        <View style={styles.navigation}>
          <Pressable onPress={() => router.push('/movies')} style={[styles.navButton, pathname === '/movies' && styles.navButtonActive]}>
            <Ionicons name="film-outline" size={18} color={pathname === '/movies' ? colors.primary : colors.text} />

            <Text style={[styles.navText, pathname === '/movies' && styles.navTextActive]}>Movies</Text>
          </Pressable>

          <Pressable onPress={() => router.push('/series')} style={[styles.navButton, pathname === '/series' && styles.navButtonActive]}>
            <Ionicons name="tv-outline" size={18} color={pathname === '/series' ? colors.primary : colors.text} />

            <Text style={[styles.navText, pathname === '/series' && styles.navTextActive]}>Series</Text>
          </Pressable>
        </View>
      </View>

      <View style={[styles.filmHoles, styles.filmHolesBottom]}>
        {Array.from({ length: 18 }).map((_, i) => (
          <View key={i} style={styles.filmHole} />
        ))}
      </View>
    </LinearGradient>
  )
}
