import { Text, View } from 'react-native'
import { styles, colors } from '../styles/global'
import Ionicons from '@expo/vector-icons/Ionicons'

function average(arr: number[]): number {
  if (arr.length === 0) return 0

  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
}

export type WatchedMovie = {
  imdbID: string
  title: string
  type: string
  year: string
  writer: string
  poster: string
  seasons?: string
  imdbRating: number
  runtime: number
  userRating: number
  countRatingDecisions: number
}
export default function WatchedSummary({ watched }: { watched: WatchedMovie[] }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating))

  const avgUserRating = average(watched.map((movie) => movie.userRating))

  const avgRuntime = average(watched.map((movie) => movie.runtime))

  return (
    <View style={styles.summary}>
      <Text style={styles.summaryTitle}>Movies you watched</Text>

      <View style={styles.summaryContent}>
        <View style={styles.summaryItem}>
          <Ionicons name="film" size={22} color={colors.primaryDark} />
          <Text style={styles.summaryText}>{watched.length} movies</Text>
        </View>

        <View style={styles.summaryItem}>
          <Ionicons name="stats-chart" size={20} color={colors.textDark} />
          <Text style={styles.summaryText}>{avgImdbRating.toFixed(2)}</Text>
        </View>

        <View style={styles.summaryItem}>
          <Ionicons name="star" size={20} color={'#fcc416'} />
          <Text style={styles.summaryText}>{avgUserRating.toFixed(2)}</Text>
        </View>

        <View style={styles.summaryItem}>
          <Ionicons name="hourglass-outline" size={20} color={colors.textDark} />
          <Text style={styles.summaryText}>{avgRuntime.toFixed(0)} min</Text>
        </View>
      </View>
    </View>
  )
}
