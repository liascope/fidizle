import { View, Pressable } from 'react-native'
import { Link } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import { styles, colors } from '../styles/global'
import { LinearGradient } from 'expo-linear-gradient'
import useResponsive from '../hooks/useResponsive'
import Logo from './Logo'

export default function HomeHeader({ children }: { children: React.ReactNode }) {
  const isDesktop = useResponsive()
  return (
    <LinearGradient
      colors={['#080808', '#4A1518', '#080808']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={isDesktop ? styles.headerDesktop : styles.header}
    >
      <View style={[styles.filmHoles, styles.filmHolesTop, isDesktop && styles.filmHolesDesktop]}>
        {Array.from({ length: isDesktop ? 30 : 20 }).map((_, i) => (
          <View key={i} style={isDesktop ? styles.filmHoleDesktop : styles.filmHole} />
        ))}
      </View>

      <Logo />

      {children}

      <Link href="/about" asChild>
        <Pressable style={isDesktop ? styles.headerButtonDesktop : styles.headerButton}>
          <Ionicons name="information-circle-outline" size={isDesktop ? 23 : 20} color={colors.textMuted} />
        </Pressable>
      </Link>

      <View style={[styles.filmHoles, styles.filmHolesBottom, isDesktop && styles.filmHolesDesktop]}>
        {Array.from({ length: isDesktop ? 30 : 20 }).map((_, i) => (
          <View key={i} style={isDesktop ? styles.filmHoleDesktop : styles.filmHole} />
        ))}
      </View>
    </LinearGradient>
  )
}
