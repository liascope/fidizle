import { View, Pressable } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import useResponsive from '../hooks/useResponsive'
import Logo from './Logo'
import { createStyles } from '../styles/global'
import { useTheme } from '../context/ThemeContext'

export default function HomeHeader({ children }: { children: React.ReactNode }) {
  const { colors } = useTheme()
  const styles = createStyles(colors)

  const isDesktop = useResponsive()
  return (
    <LinearGradient
      colors={[colors.black100, colors.darkRed100, colors.black100]}
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

      <View style={[styles.filmHoles, styles.filmHolesBottom, isDesktop && styles.filmHolesDesktop]}>
        {Array.from({ length: isDesktop ? 30 : 20 }).map((_, i) => (
          <View key={i} style={isDesktop ? styles.filmHoleDesktop : styles.filmHole} />
        ))}
      </View>
    </LinearGradient>
  )
}
