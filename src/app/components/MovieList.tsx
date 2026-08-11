import { FlatList, Image, Pressable, Text, View } from 'react-native'
import { styles } from '../styles/global'

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
                <Text>🗓</Text>
                <Text style={styles.listText}>{movie.Year}</Text>
              </View>
            </View>
          </View>
        </Pressable>
      )}
    />
  )
}
