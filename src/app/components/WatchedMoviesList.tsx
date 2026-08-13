import { FlatList, Image, Pressable, Text, View } from 'react-native'
import { styles, colors } from '../styles/global'
import { WatchedMovie } from './WatchedSummary'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function WatchedMoviesList({ watched, handleDeleteWatched }: { watched: WatchedMovie[]; handleDeleteWatched: (id: string) => void }) {
  return (
    <FlatList
      data={watched}
      keyExtractor={(movie) => movie.imdbID}
      renderItem={({ item: movie }) => (
        <View style={styles.listItem}>
          <Image source={{ uri: movie.poster }} style={styles.listImage} />

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
                <Ionicons name="hourglass-outline" size={20} color={colors.textDark} />
                <Text style={styles.movieStatText}>{movie.runtime} min</Text>
              </View>
            </View>
          </View>

          <Pressable style={({ pressed }) => [pressed && styles.btnDeletePressed]} onPress={() => handleDeleteWatched(movie.imdbID)}>
            <Ionicons name="remove-circle-outline" size={24} color={colors.primaryDark} />
          </Pressable>
        </View>
      )}
    />
  )
}
