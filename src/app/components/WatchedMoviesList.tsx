import { FlatList, Image, Pressable, Text, View } from 'react-native'
import { styles } from '../styles/global'
import { WatchedMovie } from './WatchedSummary'

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
                <Text>⭐️</Text>
                <Text style={styles.movieStatText}>{movie.imdbRating}</Text>
              </View>

              <View style={styles.movieStat}>
                <Text>🌟</Text>
                <Text style={styles.movieStatText}>{movie.userRating}</Text>
              </View>

              <View style={styles.movieStat}>
                <Text>⏳</Text>
                <Text style={styles.movieStatText}>{movie.runtime} min</Text>
              </View>
            </View>
          </View>

          <Pressable
            style={({ pressed }) => [styles.btnDelete, pressed && styles.btnDeletePressed]}
            onPress={() => handleDeleteWatched(movie.imdbID)}
          >
            <Text style={styles.btnDeleteText}>×</Text>
          </Pressable>
        </View>
      )}
    />
  )
}
