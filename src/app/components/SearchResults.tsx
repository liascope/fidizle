import MovieList from './MovieList'
import SelectedMovie from './SelectMovie'
import Loader from './Loader'
import { styles } from '../styles/global'
import { Text, View, Animated, Dimensions } from 'react-native'
import { useSearch } from '../context/SearchContext'
import { useRef, useEffect } from 'react'
import { useOmdb } from '../hooks/useOmdb'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { WatchedMovie } from './WatchedSummary'

export default function SearchResults({ query }: { query: string }) {
  const screenHeight = Dimensions.get('window').height
  const selectedMovieY = useRef(new Animated.Value(screenHeight)).current
  const { selectedId, setSelectedId } = useSearch()
  const { watched, setWatched } = useLocalStorage<WatchedMovie>([], 'watched')

  const { movies, isLoading, error } = useOmdb({ query })
  useEffect(() => {
    Animated.timing(selectedMovieY, {
      toValue: selectedId ? 0 : screenHeight,
      duration: 350,
      useNativeDriver: true,
    }).start()
  }, [selectedId])

  function handleSelectedMovie(id: string) {
    setSelectedId((currentId) => (currentId === id ? null : id))
  }

  function handleCloseId() {
    setSelectedId(null)
  }

  function handleAddWatchedMovie(movie: WatchedMovie) {
    setWatched((w) => [...w, movie])
  }

  return (
    <View style={styles.searchSection}>
      <View style={styles.resultsHeader}>
        <Text style={styles.resultsTitle}>Search results</Text>
        <Text style={styles.results}>
          {!error && movies?.length > 0 ? (
            <>
              {movies?.length ?? 0} results for <Text style={styles.numResults}>"{query}"</Text>
            </>
          ) : (
            <Text style={styles.errorText}>{error && error}</Text>
          )}
        </Text>

        {isLoading && <Loader />}

        {!isLoading && !error && <MovieList movies={movies} handleSelectedMovie={handleSelectedMovie} scrollEnabled={false} />}
      </View>

      <Animated.View
        pointerEvents={selectedId ? 'auto' : 'none'}
        style={[
          styles.selectedMovieContainer,
          {
            transform: [{ translateY: selectedMovieY }],
          },
        ]}
      >
        {selectedId && (
          <SelectedMovie handleCloseId={handleCloseId} selectedId={selectedId} handleAddWatchedMovie={handleAddWatchedMovie} watched={watched} />
        )}
      </Animated.View>
    </View>
  )
}
