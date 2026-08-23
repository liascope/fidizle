import { Text, View } from 'react-native'
import { Link } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'

import { createStyles } from '../styles/global'
import { useTheme } from '../context/ThemeContext'
import { useArchived } from '../context/ArchiveContext'
import useResponsive from '../hooks/useResponsive'

export default function HomepageCards() {
  const { colors } = useTheme()
  const styles = createStyles(colors)

  const isDesktop = useResponsive()
  const { movies, series } = useArchived()

  return (
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
  )
}
