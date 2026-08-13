import { useEffect, useRef, useState } from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import { colors, styles } from '../styles/global'
import StarRating from './StarRating'
import Ionicons from '@expo/vector-icons/Ionicons'
type MovieDetails = {
  Title: string
  Year: string
  Poster: string
  Type: string
  totalSeasons?: string
  Awards: string
  Runtime: string
  imdbRating: string
  Plot: string
  Released: string
  Actors: string
  Director: string
  Writer: string
  Genre: string
}
const apiKey = process.env.EXPO_PUBLIC_OMDB_API_KEY
export default function SelectedMovie({
  selectedId,
  handleCloseId,
  handleAddWatchedMovie,
  watched,
}: {
  selectedId: string
  handleCloseId: () => void
  handleAddWatchedMovie: (movie: any) => void
  watched: any[]
}) {
  const [movie, setMovie] = useState<MovieDetails | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [userRating, setUserRating] = useState(0)

  const countRef = useRef(0)

  useEffect(() => {
    if (userRating) {
      countRef.current++
    }
  }, [userRating])

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId)

  const watchedUserRating = watched.find((movie) => movie.imdbID === selectedId)?.userRating

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Type: type,
    totalSeasons: seasons,
    Awards: awards,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Writer: writer,
    Genre: genre,
  } = movie ?? {}

  function handleAdd() {
    const runtimeNumber = runtime ? Number(runtime.split(' ')[0]) : 0

    const newMovie = {
      imdbID: selectedId,
      title,
      type,
      year,
      writer,
      poster,
      seasons,
      imdbRating: Number(imdbRating),
      runtime: runtimeNumber,
      userRating,
      countRatingDecisions: countRef.current,
    }

    handleAddWatchedMovie(newMovie)
  }

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setIsLoading(true)

        const res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${selectedId}`)

        if (!res.ok) {
          throw new Error('Something went wrong with fetching movies')
        }

        const data = await res.json()

        if (data.Response === 'False') {
          throw new Error('Movie not found')
        }

        setMovie(data)
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message)
        }
      } finally {
        setIsLoading(false)
      }
    }

    if (selectedId) {
      getMovieDetails()
    }
  }, [selectedId])

  if (isLoading) {
    return (
      <View style={styles.details}>
        <Text style={styles.loader}>LOADING...</Text>
      </View>
    )
  }

  return (
    <ScrollView style={styles.details}>
      <View style={styles.detailsHeader}>
        <Pressable style={styles.btnBack} onPress={handleCloseId}>
          <Ionicons name="chevron-back" size={16} />
        </Pressable>

        <Image source={{ uri: poster }} style={styles.detailsImage} />

        <View style={styles.detailsOverview}>
          <Text style={styles.detailsTitle}>{title}</Text>

          <Text style={styles.detailsText}>
            {released} • {type ? type[0].toUpperCase() + type.slice(1) : ''} • {type === 'series' ? `Seasons ${seasons}` : runtime}
          </Text>

          <Text style={styles.detailsText}>{genre}</Text>

          <View style={styles.detailsInfo}>
            <Ionicons name="stats-chart" size={20} color={colors.textDark} />
            <Text style={styles.detailsText}>{imdbRating} IMDb rating</Text>
          </View>
        </View>
      </View>

      <View style={styles.detailsSection}>
        <View style={styles.rating}>
          {!isWatched ? (
            <>
              <StarRating maxRating={10} color="#FFD700" onSetRating={setUserRating} />

              {userRating > 0 && (
                <Pressable style={styles.btnAdd} onPress={handleAdd}>
                  <Text style={styles.btnAddText}>+ Add to List</Text>
                </Pressable>
              )}
            </>
          ) : (
            <Text style={styles.detailsText}>
              You rated the movie with {watchedUserRating} <Ionicons name="star" size={16} color={'#fcc416'} />
            </Text>
          )}
        </View>

        <Text style={styles.detailsText}>{plot}</Text>

        {awards !== 'N/A' && (
          <Text style={styles.detailsText}>
            <Ionicons name="trophy" size={16} /> {awards}
          </Text>
        )}

        <Text style={styles.detailsText}>Starring {actors}</Text>

        <Text style={styles.detailsText}>{director === 'N/A' ? `Written by ${writer}` : `Directed by ${director}`}</Text>
      </View>
    </ScrollView>
  )
}
