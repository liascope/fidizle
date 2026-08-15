import { LinearGradient } from 'expo-linear-gradient'
import { Text, View } from 'react-native'
import Box from './components/Box'
import Error from './components/Error'
import Loader from './components/Loader'
import MovieList from './components/MovieList'
import SelectedMovie from './components/SelectMovie'
import WatchedList from './components/WatchedList'
import { WatchedMovie } from './components/WatchedSummary'
import { useLocalStorage } from './hooks/useLocalStorage'
import { useMovies } from './hooks/useMovies'
import { styles } from './styles/global'
import { useSearch } from './context/SearchContext'

export default function HomeScreen() {
  const { query, selectedId, setSelectedId } = useSearch()
  const { watched, setWatched } = useLocalStorage<WatchedMovie>([], 'watched')
  const { movies, isLoading, error } = useMovies(query)

  function handleSelectedMovie(id: string) {
    setSelectedId((selectedId) => (id === selectedId ? null : id))
  }
  function handleCloseId() {
    setSelectedId(null)
  }
  function handleAddWatchedMovie(movie: WatchedMovie) {
    setWatched((w) => [...w, movie])
  }

  return (
    <LinearGradient colors={['#090909', '#260909', '#090909']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.container}>
      <View style={styles.main}>
        <Box>
          <Text style={styles.results}>
            {query && (
              <>
                {movies?.length} results for <Text style={styles.numResults}>'{query}'</Text>
              </>
            )}
          </Text>
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} handleSelectedMovie={handleSelectedMovie} />}
          {error && <Error message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <SelectedMovie handleCloseId={handleCloseId} selectedId={selectedId} handleAddWatchedMovie={handleAddWatchedMovie} watched={watched} />
          ) : (
            <>
              <WatchedList type="movie" />
              <WatchedList type="series" />
            </>
          )}
        </Box>
      </View>
    </LinearGradient>
  )
}
