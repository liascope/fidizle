import { Text, View } from 'react-native'
import { styles } from './styles/global'
import HomeHeader from './components/HomeHeader'
import Search from './components/Search'
import { useMovies } from './hooks/useMovies'
import { useState } from 'react'
import MovieList from './components/MovieList'
import Box from './components/Box'
import SelectedMovie from './components/SelectMovie'
import { useLocalStorage } from './hooks/useLocalStorage'
import WatchedSummary from './components/WatchedSummary'
import WatchedMoviesList from './components/WatchedMoviesList'
import Loader from './components/Loader'
import Error from './components/Error'
import { WatchedMovie } from './components/WatchedSummary'

export default function HomeScreen() {
  const [query, setQuery] = useState('')

  const [watched, setWatched] = useLocalStorage<WatchedMovie[]>([], 'watched')
  const [selectedId, setSelectedId] = useState<string | null>(null)
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
  function handleDeleteWatched(id: string) {
    setWatched((w) => w.filter((m) => m.imdbID !== id))
  }

  return (
    <>
      <HomeHeader>
        <Search query={query} setQuery={setQuery}></Search>
        <Text>
          Found <Text style={styles.numResults}>{movies?.length}</Text> results.
        </Text>
      </HomeHeader>

      <View style={styles.main}>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} handleSelectedMovie={handleSelectedMovie} />}
          {error && <Error message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <SelectedMovie handleCloseId={handleCloseId} selectedId={selectedId} handleAddWatchedMovie={handleAddWatchedMovie} watched={watched} />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList handleDeleteWatched={handleDeleteWatched} watched={watched} />
            </>
          )}
        </Box>
      </View>
    </>
  )
}
