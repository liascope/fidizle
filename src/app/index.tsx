import { Pressable, Text, View } from 'react-native'
import { useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'

import { styles, colors } from './styles/global'
import { WatchedMovie } from './components/WatchedSummary'
import { useLocalStorage } from './hooks/useLocalStorage'

export default function HomeScreen() {
  const router = useRouter()
  const { series, movies } = useLocalStorage<WatchedMovie>([], 'watched')

  return (
    <>
      {/* HOME */}
      <View style={styles.hero}>
        <Text style={styles.heroEyebrow}>NOTHING TO DO?</Text>

        <Text style={styles.heroTitle}>FIDIZLE.</Text>

        <Text style={styles.heroTagline}>WATCH. RATE. ARCHIVE.</Text>

        <Text style={styles.heroSubtitle}>Your movie & series archive.</Text>
      </View>

      {/* LIBRARY */}
      <View style={styles.librarySection}>
        <Text style={styles.sectionTitle}>Your library</Text>

        <View style={styles.libraryCards}>
          <Pressable style={({ pressed }) => [styles.libraryCard, pressed && styles.libraryCardPressed]} onPress={() => router.push('/movies')}>
            <View style={styles.libraryIcon}>
              <Ionicons name="film-outline" size={24} color={colors.primary} />
            </View>
            <Text style={styles.libraryCardTitle}>Movies</Text>
            <Text style={styles.libraryCardNumber}>{movies.length}</Text>
            <Text style={styles.libraryCardLabel}>watched</Text>
            <Text style={styles.libraryCardLink}>View movies →</Text>
          </Pressable>

          <Pressable style={({ pressed }) => [styles.libraryCard, pressed && styles.libraryCardPressed]} onPress={() => router.push('/series')}>
            <View style={styles.libraryIcon}>
              <Ionicons name="tv-outline" size={24} color={colors.primary} />
            </View>

            <Text style={styles.libraryCardTitle}>Series</Text>
            <Text style={styles.libraryCardNumber}>{series.length}</Text>
            <Text style={styles.libraryCardLabel}>watched</Text>
            <Text style={styles.libraryCardLink}>View series →</Text>
          </Pressable>
        </View>
      </View>
    </>
  )
}
