import { Text, View } from 'react-native'
import { Link } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient'
import { styles, colors } from '../styles/global'
import { WatchedMovie } from '../components/WatchedSummary'
import { useLocalStorage } from '../hooks/useLocalStorage'
import useResponsive from '../hooks/useResponsive'
export default function HomeScreen() {
  const { series, movies } = useLocalStorage<WatchedMovie>([], 'watched')
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

      <View style={isDesktop ? styles.libraryDesktop : { paddingHorizontal: 16 }}>
        <Text style={isDesktop ? styles.sectionTitleDesktop : styles.sectionTitle}>Your library</Text>

        <View style={isDesktop ? styles.libraryCardsDesktop : styles.libraryCards}>
          <Link href="/movies">
            <View style={isDesktop ? styles.libraryCardDesktop : styles.libraryCard}>
              <View style={isDesktop ? styles.libraryIconDesktop : styles.libraryIcon}>
                <Ionicons name="film-outline" size={24} color={colors.primary} />
              </View>

              <Text style={isDesktop ? styles.libraryCardTitleDesktop : styles.libraryCardTitle}>Movies</Text>

              <Text style={isDesktop ? styles.libraryCardNumberDesktop : styles.libraryCardNumber}>{movies.length}</Text>

              <Text style={isDesktop ? styles.libraryCardLabelDesktop : styles.libraryCardLabel}>watched</Text>

              <Text style={isDesktop ? styles.libraryCardLinkDesktop : styles.libraryCardLink}>View movies →</Text>
            </View>
          </Link>

          <Link href="/series">
            <View style={isDesktop ? styles.libraryCardDesktop : styles.libraryCard}>
              <View style={isDesktop ? styles.libraryIconDesktop : styles.libraryIcon}>
                <Ionicons name="tv-outline" size={24} color={colors.primary} />
              </View>

              <Text style={isDesktop ? styles.libraryCardTitleDesktop : styles.libraryCardTitle}>Series</Text>

              <Text style={isDesktop ? styles.libraryCardNumberDesktop : styles.libraryCardNumber}>{series.length}</Text>

              <Text style={isDesktop ? styles.libraryCardLabelDesktop : styles.libraryCardLabel}>watched</Text>

              <Text style={isDesktop ? styles.libraryCardLinkDesktop : styles.libraryCardLink}>View series →</Text>
            </View>
          </Link>
        </View>
      </View>
    </LinearGradient>
  )
}
