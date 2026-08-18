import { FlatList, Image, Pressable, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { styles, colors } from '../styles/global'
import { WatchedMovie } from './WatchedSummary'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useLocalStorage } from '../hooks/useLocalStorage'
import WatchedSummary from './WatchedSummary'
import Toast from './Toast'

type WatchedListProps = {
  type: 'movie' | 'series'
}

export default function WatchedList({ type }: WatchedListProps) {
  const { movies, series, setWatched } = useLocalStorage<WatchedMovie>([], 'watched')

  const watched = type === 'series' ? series : movies
  const [toastVisible, setToastVisible] = useState(false)
  const [toastKey, setToastKey] = useState(0)
  function handleDeleteWatched(id: string) {
    setWatched((w) => w.filter((m) => m.imdbID !== id))
    setToastKey((key) => key + 1)
    setToastVisible(true)
  }

  return (
    <LinearGradient colors={['#090909', '#260909', '#090909']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ flex: 1, padding: 30 }}>
      <WatchedSummary watched={watched} type={type} />
      <FlatList
        data={watched}
        keyExtractor={(movie) => movie.imdbID}
        numColumns={3}
        columnWrapperStyle={styles.movieGrid}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: movie }) => (
          <View style={styles.movieCard}>
            {/* Poster */}
            <View style={styles.posterContent}>
              {/* Film perforation */}
              <View style={styles.filmStrip}>
                <View style={styles.filmHolesCard}>
                  {Array.from({ length: 8 }).map((_, i) => (
                    <View key={i} style={styles.filmHoleCard} />
                  ))}
                </View>

                <Image source={{ uri: movie.poster }} style={styles.moviePoster} />

                <View style={styles.filmHolesCard}>
                  {Array.from({ length: 8 }).map((_, i) => (
                    <View key={i} style={styles.filmHoleCard} />
                  ))}
                </View>
              </View>
            </View>
            {/* Info */}
            <View style={styles.movieInfo}>
              <View style={styles.movieTitleRow}>
                <Text style={styles.movieTitle} numberOfLines={2}>
                  {movie.title}
                </Text>

                <Pressable style={styles.deleteButton} onPress={() => handleDeleteWatched(movie.imdbID)}>
                  <Ionicons name="remove-circle-outline" size={22} color={colors.primaryDark} />
                </Pressable>
              </View>

              <View style={styles.movieStats}>
                {/* IMDb */}
                <View style={styles.movieStat}>
                  <Ionicons name="stats-chart-outline" size={16} color={colors.textDark} />

                  <Text style={styles.movieStatText}>{movie.imdbRating}</Text>
                </View>

                {/* Own rating */}
                <View style={styles.movieStat}>
                  <Ionicons name="star" size={16} color="#fcc416" />

                  <Text style={styles.movieStatText}>{movie.userRating}</Text>
                </View>

                {/* Runtime / Seasons */}
                <View style={styles.movieStat}>
                  <Ionicons name={type === 'series' ? 'albums-outline' : 'hourglass-outline'} size={16} color={colors.textDark} />

                  <Text style={styles.movieStatText}>{type === 'series' ? `${movie.seasons} seasons` : `${movie.runtime} min`}</Text>
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
