import { FlatList, Image, Pressable, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

import { colors, styles } from '../styles/global'

type Movie = {
  imdbID: string
  Title: string
  Year: string
  Poster: string
  Type: string
}

type MovieListProps = {
  movies: Movie[]
  handleSelectedMovie: (id: string) => void
  scrollEnabled?: boolean
}

export default function MovieList({ movies, handleSelectedMovie }: MovieListProps) {
  return (
    <FlatList
      data={movies}
      keyExtractor={(movie) => movie.imdbID}
      numColumns={3}
      columnWrapperStyle={styles.movieGrid}
      contentContainerStyle={{ padding: 30 }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item: movie }) => (
        <Pressable style={({ pressed }) => [styles.movieCard, pressed && styles.movieCardPressed]} onPress={() => handleSelectedMovie(movie.imdbID)}>
          {/* Poster */}
          <View style={styles.posterContent}>
            <View style={styles.filmStrip}>
              {/* Left Film Border */}
              <View style={styles.filmHolesCard}>
                {Array.from({ length: 8 }).map((_, i) => (
                  <View key={i} style={styles.filmHoleCard} />
                ))}
              </View>

              {/* Poster */}
              <Image source={{ uri: movie.Poster }} style={styles.moviePoster} />

              {/* Right Film Border */}
              <View style={styles.filmHolesCard}>
                {Array.from({ length: 8 }).map((_, i) => (
                  <View key={i} style={styles.filmHoleCard} />
                ))}
              </View>
            </View>
          </View>

          {/* Info */}
          <View style={styles.movieInfo}>
            <Text style={styles.movieTitle} numberOfLines={2}>
              {movie.Title}
            </Text>

            <View style={styles.searchMovieMeta}>
              {/* Year */}
              <View style={styles.movieStat}>
                <Ionicons name="calendar-outline" size={15} color={colors.textDark} />

                <Text style={styles.movieStatText}>{movie.Year}</Text>
              </View>

              {/* Type */}
              <View style={styles.movieStat}>
                <Ionicons name={movie.Type === 'series' ? 'tv-outline' : 'film-outline'} size={15} color={colors.textDark} />

                <Text style={styles.movieStatText}>{movie.Type === 'series' ? 'Series' : 'Movie'}</Text>
              </View>
            </View>
          </View>
        </Pressable>
      )}
    />
  )
}
