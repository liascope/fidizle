import { FlatList, Image, Pressable, Text, View } from 'react-native'
import { styles, colors } from '../styles/global'
import Ionicons from '@expo/vector-icons/Ionicons'
type Movie = {
  imdbID: string
  Title: string
  Year: string
  Poster: string
  Type: string
}
export default function MovieList({ movies, handleSelectedMovie }: { movies: Movie[]; handleSelectedMovie: (id: string) => void }) {
  return (
    <FlatList
      data={movies}
      keyExtractor={(movie) => movie.imdbID}
      contentContainerStyle={styles.list}
      renderItem={({ item: movie }) => (
        <Pressable style={({ pressed }) => [styles.listItem, pressed && styles.listItemPressed]} onPress={() => handleSelectedMovie(movie.imdbID)}>
          <Image source={{ uri: movie.Poster }} style={styles.listImage} />
          <View style={styles.listContent}>
            <Text style={styles.listTitle}>{movie.Title}</Text>
            <View style={styles.listInfo}>
              <View style={styles.listInfoItem}>
                <Ionicons name="calendar-outline" size={18} color={colors.textMuted} />
                <Text style={styles.listText}>
                  {movie.Year} ({movie.Type})
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
      )}
    />
  )
}
