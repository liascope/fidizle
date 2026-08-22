import { Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { styles } from '../styles/global'
import HomepageCards from './HomepageCards'
import { useArchived } from '../context/ArchiveContext'
import useResponsive from '../hooks/useResponsive'

export default function HomePage() {
  const { movies, series } = useArchived()
  const isDesktop = useResponsive()

  return (
    <LinearGradient
      colors={['#090909', '#260909', '#090909']}
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
