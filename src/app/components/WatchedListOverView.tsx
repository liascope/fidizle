import { styles, colors } from '../styles/global'
import { WatchedMovie } from './WatchedSummary'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useLocalStorage } from '../hooks/useLocalStorage'

import { View, Image, Text, FlatList } from 'react-native'

export default function WatchedListOverView() {
  const { watched } = useLocalStorage<WatchedMovie>([], 'watched')

  return (
    <FlatList
      data={watched}
      keyExtractor={(movie) => movie.imdbID}
      renderItem={({ item: movie }) => (
        <View style={styles.listItem}>
          <View style={styles.posterContent}>
            <View style={styles.filmStrip}>
              <View style={styles.filmHolessmall}>
                {Array.from({ length: 7 }).map((_, i) => (
                  <View key={i} style={styles.filmHolesmall} />
                ))}
              </View>
              <Image source={{ uri: movie.poster }} style={styles.listImage} />
              <View style={styles.filmHolessmall}>
                {Array.from({ length: 7 }).map((_, i) => (
                  <View key={i} style={styles.filmHolesmall} />
                ))}
              </View>
            </View>
          </View>
          <View style={styles.movieContent}>
            <Text style={styles.movieTitle}>{movie.title}</Text>

            <View style={styles.movieStats}>
              <View style={styles.movieStat}>
                <Ionicons name="stats-chart-outline" size={20} color={colors.textDark} />
                <Text style={styles.movieStatText}>{movie.imdbRating}</Text>
              </View>

              <View style={styles.movieStat}>
                <Ionicons name="star" size={20} color={'#fcc416'} />
                <Text style={styles.movieStatText}>{movie.userRating}</Text>
              </View>

              <View style={styles.movieStat}>
                <Ionicons name={movie.type === 'series' ? 'albums-outline' : 'hourglass-outline'} size={20} color={colors.textDark} />

                <Text style={styles.summaryText}>{movie.type === 'series' ? `${movie.seasons} seasons` : `${movie.runtime} min`}</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    />
  )
}
