import MovieList from './MovieList'
import SelectedMovie from './SelectMovie'
import Loader from './Loader'
import { styles, colors } from '../styles/global'
import { Text, Animated, Dimensions } from 'react-native'
import { useSearch } from '../context/SearchContext'
import { useRef, useEffect } from 'react'
import { useOmdb } from '../hooks/useOmdb'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { WatchedMovie } from './WatchedSummary'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function SearchResults({ query }: { query: string }) {
  const screenHeight = Dimensions.get('window').height
  const selectedMovieY = useRef(new Animated.Value(screenHeight)).current
  const { selectedId, setSelectedId } = useSearch()
  const { watched, setWatched } = useLocalStorage<WatchedMovie>([], 'watched')

  const { movies, isLoading, error } = useOmdb({ query })

  useEffect(() => {
    Animated.timing(selectedMovieY, {
      toValue: selectedId ? 0 : screenHeight * screenHeight,
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

  const searchOpacity = useRef(new Animated.Value(0.4)).current

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(searchOpacity, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(searchOpacity, {
          toValue: 0.4,
          duration: 700,
          useNativeDriver: true,
        }),
      ]),
    ).start()
  }, [query])

  return (
    <>
      <Text style={styles.resultsTitle}>
        Search results{'  '}
        {query.trim().length < 3 && (
          <Animated.View style={{ opacity: searchOpacity }}>
            <Ionicons name="search" size={22} color={colors.primary} />
          </Animated.View>
        )}
      </Text>
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
    </>
  )
}
