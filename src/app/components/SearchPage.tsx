import { Pressable, Text, View, Animated } from 'react-native'
import { useEffect, useRef } from 'react'
import { router } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient'
import BottomSheet from '@gorhom/bottom-sheet'
import { createStyles } from '../styles/global'
import { useTheme } from '../context/ThemeContext'

import Loader from './Loader'
import MovieList from './MovieList'
import SelectedMovie from './SelectMovie'
import { WatchedMovie } from './WatchedSummary'

import { useSearch } from '../context/SearchContext'
import { useArchived } from '../context/ArchiveContext'
import { useOmdb } from '../hooks/useOmdb'

export default function SearchPage() {
  const { colors } = useTheme()
  const styles = createStyles(colors)

  const { query, selectedId, setSelectedId } = useSearch()
  const { watched, setWatched } = useArchived()
  const { movies, isLoading, error } = useOmdb({ query })

  const searchOpacity = useRef(new Animated.Value(0.4)).current
  const bottomSheetRef = useRef<BottomSheet>(null)

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

  useEffect(() => {
    if (selectedId) {
      bottomSheetRef.current?.snapToIndex(0)
    } else {
      bottomSheetRef.current?.close()
    }
  }, [selectedId])

  useEffect(() => {
    if (query.trim().length >= 3) {
      return
    }

    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(searchOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(searchOpacity, {
          toValue: 0.4,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    )

    animation.start()

    return () => {
      animation.stop()
    }
  }, [searchOpacity])

  return (
    <LinearGradient colors={[colors.black, colors.darkRed, colors.black]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.searchHeader}>
        <Pressable style={styles.searchBackButton} onPress={() => router.back()} hitSlop={8}>
          <Ionicons name="chevron-back" size={22} color={colors.text} />
        </Pressable>
        <View style={styles.resultsTitleContainer}>
          {query.trim().length < 3 && (
            <Animated.View style={{ opacity: searchOpacity }}>
              <Ionicons name="search" size={22} color={colors.primary} />
            </Animated.View>
          )}
          <Text style={styles.resultsTitle}> Search results </Text>
        </View>
      </View>

      {/* Search Results */}
      {query.trim().length > 0 ? (
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

          {/* Overview Info when selected */}
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
      ) : null}
    </LinearGradient>
  )
}
