import { useState } from 'react'
import { FlatList, Pressable, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Ionicons from '@expo/vector-icons/Ionicons'

import { createStyles } from '../styles/global'
import { useTheme } from '../context/ThemeContext'
import WatchedSummary from './WatchedSummary'
import Toast from './Toast'
import useResponsive from '../hooks/useResponsive'
import MoviePoster from './MoviePoster'

import { useArchived } from '../context/ArchiveContext'

type WatchedListProps = {
  type: 'movie' | 'series'
}

export default function ArchivePage({ type }: WatchedListProps) {
  const { colors } = useTheme()
  const styles = createStyles(colors)

  const { movies, series, setWatched } = useArchived()

  const watched = type === 'series' ? series : movies
  const [toastVisible, setToastVisible] = useState(false)
  const [toastKey, setToastKey] = useState(0)
  function handleDeleteWatched(id: string) {
    setWatched((w) => w.filter((m) => m.imdbID !== id))
    setToastKey((key) => key + 1)
    setToastVisible(true)
  }

  const isDesktop = useResponsive()

  return (
    <LinearGradient colors={[colors.black, colors.darkRed, colors.black]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ flex: 1 }}>
      <WatchedSummary watched={watched} type={type} />

      <FlatList
        data={watched}
        keyExtractor={(movie) => movie.imdbID}
        numColumns={3}
        contentContainerStyle={isDesktop ? styles.watchedListContentDesktop : { padding: 20, paddingBottom: 90 }}
        columnWrapperStyle={isDesktop ? styles.movieGridDesktop : styles.movieGrid}
        showsVerticalScrollIndicator={false}
        scrollEnabled
        renderItem={({ item: movie }) => (
          <View style={isDesktop ? styles.movieCardDesktop : styles.movieCard}>
            {/* Poster */}
            <View style={isDesktop ? styles.posterContentDesktop : styles.posterContent}>
              <View style={isDesktop ? styles.filmStripDesktop : styles.filmStrip}>
                <View style={isDesktop ? styles.filmHolesCardDesktop : styles.filmHolesCard}>
                  {Array.from({ length: isDesktop ? 12 : 8 }).map((_, i) => (
                    <View key={i} style={isDesktop ? styles.filmHoleCardDesktop : styles.filmHoleCard} />
                  ))}
                </View>

                <MoviePoster uri={movie.poster} type={movie.type} />

                <View style={isDesktop ? styles.filmHolesCardDesktop : styles.filmHolesCard}>
                  {Array.from({ length: isDesktop ? 12 : 8 }).map((_, i) => (
                    <View key={i} style={isDesktop ? styles.filmHoleCardDesktop : styles.filmHoleCard} />
                  ))}
                </View>
              </View>
            </View>

            {/* Info */}
            <View style={isDesktop ? styles.movieInfoDesktop : styles.movieInfo}>
              <View style={styles.movieTitleRow}>
                <Text style={isDesktop ? styles.movieTitleDesktop : styles.movieTitle} numberOfLines={2}>
                  {movie.title}
                </Text>

                <Pressable style={isDesktop ? styles.deleteButtonDesktop : styles.deleteButton} onPress={() => handleDeleteWatched(movie.imdbID)}>
                  <Ionicons name="remove-circle-outline" size={isDesktop ? 23 : 22} color={colors.primaryDark} />
                </Pressable>
              </View>

              <View style={isDesktop ? styles.movieStatsDesktop : styles.movieStats}>
                <View style={styles.movieStat}>
                  <Ionicons name="stats-chart-outline" size={isDesktop ? 17 : 16} color={colors.textDark} />

                  <Text style={isDesktop ? styles.movieStatTextDesktop : styles.movieStatText}>{movie.imdbRating}</Text>
                </View>

                <View style={styles.movieStat}>
                  <Ionicons name="star" size={isDesktop ? 17 : 16} color="#fcc416" />

                  <Text style={isDesktop ? styles.movieStatTextDesktop : styles.movieStatText}>{movie.userRating}</Text>
                </View>

                <View style={styles.movieStat}>
                  <Ionicons name={type === 'series' ? 'albums-outline' : 'hourglass-outline'} size={isDesktop ? 17 : 16} color={colors.textDark} />

                  <Text style={isDesktop ? styles.movieStatTextDesktop : styles.movieStatText}>
                    {type === 'series' ? `${movie.seasons} seasons` : `${movie.runtime} min`}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />

      <Toast key={toastKey} type="removed" visible={toastVisible} />
    </LinearGradient>
  )
}
