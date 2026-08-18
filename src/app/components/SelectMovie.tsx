import { useEffect, useRef, useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { styles, colors } from '../styles/global'
import StarRating from './StarRating'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useOmdb } from '../hooks/useOmdb'
import Toast from './Toast'

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
  const [userRating, setUserRating] = useState(0)
  const [toastVisible, setToastVisible] = useState(false)
  const countRef = useRef(0)

  const { movie, isLoading, error } = useOmdb({
    id: selectedId,
  })

  useEffect(() => {
    if (userRating) {
      countRef.current++
    }
  }, [userRating])

  const isWatched = watched.some((movie) => movie.imdbID === selectedId)

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
  } = (movie as MovieDetails) ?? {}

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
    setToastVisible(true)
  }

  if (isLoading) {
    return (
      <View style={styles.detailsState}>
        <View style={styles.detailsStateIcon}>
          <Ionicons name="film-outline" size={28} color={colors.primary} />
        </View>

        <Text style={styles.detailsStateTitle}>Loading movie...</Text>

        <Text style={styles.detailsStateText}>Getting the movie details for you.</Text>
      </View>
    )
  }

  if (error || !movie) {
    return (
      <View style={styles.detailsState}>
        <View style={styles.detailsStateIcon}>
          <Ionicons name="film-outline" size={28} color={colors.primary} />
        </View>

        <Text style={styles.detailsStateTitle}>Movie not found</Text>

        <Text style={styles.detailsStateText}>We couldn't find any details for this movie.</Text>

        <Pressable style={styles.detailsStateButton} onPress={handleCloseId}>
          <Text style={styles.detailsStateButtonText}>Go back</Text>
        </Pressable>
      </View>
    )
  }

  return (
    <View style={styles.details}>
      {/* Header */}
      <View style={styles.detailsTopBar}>
        <Pressable style={styles.btnBack} onPress={handleCloseId}>
          <Ionicons name="chevron-down" size={20} color={colors.text} />
        </Pressable>

        <Text style={styles.detailsTopBarTitle}>Movie details</Text>
      </View>

      {/* Main information */}
      <View style={styles.detailsMain}>
        <Image source={{ uri: poster }} style={styles.detailsImage} />

        <View style={styles.detailsOverview}>
          <Text style={styles.detailsTitle}>{title}</Text>

          <Text style={styles.detailsMeta}>
            {released} · {type ? type[0].toUpperCase() + type.slice(1) : ''}
            {' · '}
            {type === 'series' ? `${seasons} seasons` : runtime}
          </Text>

          <View style={styles.detailsInfo}>
            <Ionicons name="stats-chart" size={17} color={colors.primary} />

            <Text style={styles.detailsInfoText}>{imdbRating} IMDb</Text>
          </View>

          <Text style={styles.detailsGenre}>{genre}</Text>
        </View>
      </View>

      {/* Description */}
      <View style={styles.detailsContent}>
        <Text style={styles.detailsSectionTitle}>Overview</Text>

        <Text style={styles.detailsText}>{plot}</Text>

        {awards !== 'N/A' && (
          <View style={styles.detailsRow}>
            <Ionicons name="trophy-outline" size={17} color={colors.primary} />

            <Text style={styles.detailsText}>{awards}</Text>
          </View>
        )}

        <View style={styles.detailsCredits}>
          <Text style={styles.detailsCreditLabel}>Starring</Text>

          <Text style={styles.detailsText}>{actors}</Text>
        </View>

        <View style={styles.detailsCredits}>
          <Text style={styles.detailsCreditLabel}>{director === 'N/A' ? 'Written by' : 'Directed by'}</Text>

          <Text style={styles.detailsText}>{director === 'N/A' ? writer : director}</Text>
        </View>
      </View>

      {/* Rating */}
      <View style={styles.rating}>
        {!isWatched ? (
          <>
            <View>
              <Text style={styles.ratingTitle}>Your rating</Text>

              <Text style={styles.ratingSubtitle}>How would you rate this movie?</Text>
            </View>

            <StarRating maxRating={10} color="#FFD700" onSetRating={setUserRating} />

            {userRating > 0 && (
              <Pressable style={styles.btnAdd} onPress={handleAdd}>
                <Ionicons name="add" size={16} color={colors.text} />

                <Text style={styles.btnAddText}>Add to List</Text>
              </Pressable>
            )}
          </>
        ) : (
          <View style={styles.alreadyRated}>
            <Ionicons name="star" size={18} color="#fcc416" />

            <Text style={styles.detailsText}>You rated this movie {watchedUserRating}/10</Text>
          </View>
        )}
      </View>

      <Toast type="success" visible={toastVisible} />
    </View>
  )
}
