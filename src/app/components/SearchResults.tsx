import { useEffect, useRef } from 'react'
import { Animated, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import BottomSheet from '@gorhom/bottom-sheet'
import Ionicons from '@expo/vector-icons/Ionicons'

import MovieList from './MovieList'
import SelectedMovie from './SelectMovie'
import Loader from './Loader'
import { styles, colors } from '../styles/global'
import { useSearch } from '../context/SearchContext'
import { useOmdb } from '../hooks/useOmdb'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { WatchedMovie } from './WatchedSummary'

export default function SearchResults({ query }: { query: string }) {
  const { selectedId, setSelectedId } = useSearch()

  const { watched, setWatched } = useLocalStorage<WatchedMovie>([], 'watched')

  const { movies, isLoading, error } = useOmdb({ query })

  const bottomSheetRef = useRef<BottomSheet>(null)

  useEffect(() => {
    if (selectedId) {
      bottomSheetRef.current?.snapToIndex(0)
    } else {
      bottomSheetRef.current?.close()
    }
  }, [selectedId])

  function handleSelectedMovie(id: string) {
    setSelectedId(id)
  }

  function handleCloseId() {
    bottomSheetRef.current?.close()
  }

  function handleSheetChange(index: number) {
    if (index === -1) {
      setSelectedId(null)
    }
  }

  function handleAddWatchedMovie(movie: WatchedMovie) {
    setWatched((current) => [...current, movie])
  }

  return (
    <>
      <Text style={styles.results}>
        {!error && movies?.length > 0 ? (
          <>
            <Text> {movies.length} results for</Text>
            <Text style={styles.numResults}>"{query}"</Text>
          </>
        ) : (
          <Text style={styles.errorText}>{error && error}</Text>
        )}
      </Text>

      {isLoading && <Loader />}

      {!isLoading && !error && <MovieList movies={movies} handleSelectedMovie={handleSelectedMovie} />}

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={['78%']}
        enablePanDownToClose
        enableDynamicSizing={false}
        onChange={handleSheetChange}
        backgroundStyle={styles.details}
        handleIndicatorStyle={styles.sheetHandle}
      >
        {selectedId && (
          <SelectedMovie selectedId={selectedId} handleCloseId={handleCloseId} handleAddWatchedMovie={handleAddWatchedMovie} watched={watched} />
        )}
      </BottomSheet>
    </>
  )
}
