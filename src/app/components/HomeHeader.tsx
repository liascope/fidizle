import { Text, View, Image, Pressable } from 'react-native'
import { Link } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import { styles, colors } from '../styles/global'
import { LinearGradient } from 'expo-linear-gradient'
import useResponsive from '../hooks/useResponsive'

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
        {Array.from({ length: isDesktop ? 40 : 20 }).map((_, i) => (
          <View key={i} style={isDesktop ? styles.filmHoleDesktop : styles.filmHole} />
        ))}
      </View>

      <Link href="/" style={{ flex: 1 }}>
        <View style={isDesktop ? styles.logoDesktop : styles.logo}>
          <Image source={require('@/assets/clapboard.png')} style={isDesktop ? styles.logoIconDesktop : styles.logoIcon} />

          <Text style={isDesktop ? styles.logoTitleDesktop : styles.logoTitle}>fidizle</Text>
        </View>
      </Link>

      {children}

      <Link href="/about" asChild>
        <Pressable style={isDesktop ? styles.headerButtonDesktop : styles.headerButton}>
          <Ionicons name="information-circle-outline" size={isDesktop ? 23 : 20} color={colors.textMuted} />
        </Pressable>
      </Link>

      <View style={[styles.filmHoles, styles.filmHolesBottom, isDesktop && styles.filmHolesDesktop]}>
        {Array.from({ length: isDesktop ? 40 : 20 }).map((_, i) => (
          <View key={i} style={isDesktop ? styles.filmHoleDesktop : styles.filmHole} />
        ))}
      </View>
    </LinearGradient>
  )
}
