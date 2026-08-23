import { Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { createStyles } from '../styles/global'
import { useTheme } from '../context/ThemeContext'
import HomepageCards from './HomepageCards'

import useResponsive from '../hooks/useResponsive'

export default function HomePage() {
  const isDesktop = useResponsive()
  const { colors } = useTheme()
  const styles = createStyles(colors)

  return (
    <LinearGradient
      colors={[colors.black, colors.darkRed, colors.black]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1, padding: isDesktop ? 40 : 20 }}
    >
      <View style={isDesktop ? styles.heroDesktop : styles.hero}>
        <Text style={isDesktop ? styles.heroEyebrowDesktop : styles.heroEyebrow}>NOTHING TO DO?</Text>

        <Text style={isDesktop ? styles.heroTitleDesktop : styles.heroTitle}>FIDIZLE.</Text>

        <Text style={isDesktop ? styles.heroTaglineDesktop : styles.heroTagline}>WATCH. RATE. ARCHIVE.</Text>

        <Text style={isDesktop ? styles.heroSubtitleDesktop : styles.heroSubtitle}>Your movie & series archive.</Text>
      </View>

      <HomepageCards />
    </LinearGradient>
  )
}
