import { Text, View } from 'react-native'
import { styles, colors } from '../styles/global'
import Ionicons from '@expo/vector-icons/Ionicons'

function average(arr: number[]): number {
  if (arr.length === 0) return 0

  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
}

export type MediaType = 'movie' | 'series'

export type WatchedMovie = {
  imdbID: string
  title: string
  type: MediaType
  year: string
  writer: string
  poster: string
  seasons?: string
  imdbRating: number
  runtime: number
  userRating: number
  countRatingDecisions: number
}

export default function WatchedSummary({ watched, type }: { watched: WatchedMovie[]; type: MediaType }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating))

  const avgUserRating = average(watched.map((movie) => movie.userRating))

  const avgRuntime = average(watched.map((movie) => movie.runtime))

  const avgSeasons = average(watched.filter((movie) => movie.seasons).map((movie) => Number(movie.seasons)))

  const isSeries = type === 'series'

  return (
    <View style={styles.summary}>
      <Text style={styles.summaryTitle}>{isSeries ? 'Series you watched' : 'Movies you watched'}</Text>

      <View style={styles.summaryContent}>
        <View style={styles.summaryItem}>
          <Ionicons name={isSeries ? 'tv' : 'film'} size={22} color={colors.primaryDark} />

          <Text style={styles.summaryText}>
            {watched.length} {isSeries ? 'series' : 'movies'}
          </Text>
        </View>

        <View style={styles.summaryItem}>
          <Ionicons name="stats-chart" size={20} color={colors.textDark} />

          <Text style={styles.summaryText}>IMDb {avgImdbRating.toFixed(2)}</Text>
        </View>

        <View style={styles.summaryItem}>
          <Ionicons name="star" size={20} color="#fcc416" />

          <Text style={styles.summaryText}>{avgUserRating.toFixed(2)}</Text>
        </View>

        {/* Movie → Runtime / Series → Seasons */}
        <View style={styles.summaryItem}>
          <Ionicons name={isSeries ? 'albums-outline' : 'hourglass-outline'} size={20} color={colors.textDark} />

          <Text style={styles.summaryText}>{isSeries ? `${avgSeasons.toFixed(0)} seasons` : `${avgRuntime.toFixed(0)} min`}</Text>
        </View>
      </View>
    </View>
  )
}
