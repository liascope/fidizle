import { FlatList, Pressable, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import MoviePoster from './MoviePoster'
import { colors, styles } from '../styles/global'
import useResponsive from '../hooks/useResponsive'
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

export default function MovieList({ movies, handleSelectedMovie, scrollEnabled = true }: MovieListProps) {
  const isDesktop = useResponsive()

  return (
    <FlatList
      data={movies}
      keyExtractor={(movie) => movie.imdbID}
      numColumns={3}
      columnWrapperStyle={isDesktop ? styles.movieGridDesktop : styles.movieGrid}
      contentContainerStyle={isDesktop ? styles.movieListContentDesktop : { paddingHorizontal: 16, marginBottom: 100 }}
      showsVerticalScrollIndicator={false}
      scrollEnabled={scrollEnabled}
      renderItem={({ item: movie }) => (
        <Pressable
          style={({ pressed }) => [
            isDesktop ? styles.movieCardDesktop : styles.movieCard,
            pressed && (isDesktop ? styles.movieCardPressedDesktop : styles.movieCardPressed),
          ]}
          onPress={() => handleSelectedMovie(movie.imdbID)}
        >
          <View style={isDesktop ? styles.posterContentDesktop : styles.posterContent}>
            <View style={isDesktop ? styles.filmStripDesktop : styles.filmStrip}>
              <View style={isDesktop ? styles.filmHolesCardDesktop : styles.filmHolesCard}>
                {Array.from({ length: isDesktop ? 12 : 8 }).map((_, i) => (
                  <View key={i} style={isDesktop ? styles.filmHoleCardDesktop : styles.filmHoleCard} />
                ))}
              </View>

              <MoviePoster uri={movie.Poster} type={movie.Type} />

              <View style={isDesktop ? styles.filmHolesCardDesktop : styles.filmHolesCard}>
                {Array.from({ length: isDesktop ? 12 : 8 }).map((_, i) => (
                  <View key={i} style={isDesktop ? styles.filmHoleCardDesktop : styles.filmHoleCard} />
                ))}
              </View>
            </View>
          </View>

          <View style={isDesktop ? styles.movieInfoDesktop : styles.movieInfo}>
            <Text style={isDesktop ? styles.movieTitleDesktop : styles.movieTitle} numberOfLines={2}>
              {movie.Title}
            </Text>

            <View style={isDesktop ? styles.searchMovieMetaDesktop : styles.searchMovieMeta}>
              <View style={styles.movieStat}>
                <Ionicons name="calendar-outline" size={isDesktop ? 16 : 15} color={colors.textDark} />

                <Text style={isDesktop ? styles.movieStatTextDesktop : styles.movieStatText}>{movie.Year}</Text>
              </View>

              <View style={styles.movieStat}>
                <Ionicons name={movie.Type === 'series' ? 'tv-outline' : 'film-outline'} size={isDesktop ? 16 : 15} color={colors.textDark} />

                <Text style={isDesktop ? styles.movieStatTextDesktop : styles.movieStatText}>{movie.Type === 'series' ? 'Series' : 'Movie'}</Text>
              </View>
            </View>
          </View>
        </Pressable>
      )}
    />
  )
}
