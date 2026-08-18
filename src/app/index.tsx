import { Text, View } from 'react-native'
import { Link } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient'
import { styles, colors } from './styles/global'
import { WatchedMovie } from './components/WatchedSummary'
import { useLocalStorage } from './hooks/useLocalStorage'

export default function HomeScreen() {
  const { series, movies } = useLocalStorage<WatchedMovie>([], 'watched')

  return (
    <LinearGradient colors={['#090909', '#260909', '#090909']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ flex: 1, padding: 30 }}>
      {/* HOME */}
      <View style={styles.hero}>
        <Text style={styles.heroEyebrow}>NOTHING TO DO?</Text>
        <Text style={styles.heroTitle}>FIDIZLE.</Text>
        <Text style={styles.heroTagline}>WATCH. RATE. ARCHIVE.</Text>
        <Text style={styles.heroSubtitle}>Your movie & series archive.</Text>
      </View>

      {/* LIBRARY */}
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={styles.sectionTitle}>Your library</Text>

        <View style={styles.libraryCards}>
          <Link href="/movies" style={styles.libraryCard}>
            <View style={styles.libraryIcon}>
              <Ionicons name="film-outline" size={24} color={colors.primary} />
            </View>

            <Text style={styles.libraryCardTitle}>Movies</Text>
            <Text style={styles.libraryCardNumber}>{movies.length}</Text>
            <Text style={styles.libraryCardLabel}>watched</Text>
            <Text style={styles.libraryCardLink}>View movies →</Text>
          </Link>

          <Link href="/series" style={styles.libraryCard}>
            <View style={styles.libraryIcon}>
              <Ionicons name="tv-outline" size={24} color={colors.primary} />
            </View>

            <Text style={styles.libraryCardTitle}>Series</Text>
            <Text style={styles.libraryCardNumber}>{series.length}</Text>
            <Text style={styles.libraryCardLabel}>watched</Text>
            <Text style={styles.libraryCardLink}>View series →</Text>
          </Link>
        </View>
      </View>
    </LinearGradient>
  )
}
