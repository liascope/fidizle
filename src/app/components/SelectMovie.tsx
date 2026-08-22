import { useEffect, useRef, useState } from 'react'

import { Image, Pressable, Text, View } from 'react-native'

import { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import Ionicons from '@expo/vector-icons/Ionicons'

import { styles, colors } from '../styles/global'
import useResponsive from '../hooks/useResponsive'
import StarRating from './StarRating'
import Toast from './Toast'

import { useOmdb } from '../hooks/useOmdb'
import { WatchedMovie } from './WatchedSummary'

type OmdbMovieDetails = {
  Title: string
  Year: string
  Poster: string
  Type: 'movie' | 'series'
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
type SelectedMovieProps = {
  selectedId: string
  handleCloseId: () => void
  handleAddWatchedMovie: (movie: WatchedMovie) => void
  watched: WatchedMovie[]
}

export default function SelectedMovie({ selectedId, handleCloseId, handleAddWatchedMovie, watched }: SelectedMovieProps) {
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
  } = (movie as OmdbMovieDetails) ?? {}

  function handleAdd() {
    const runtimeNumber = runtime ? Number(runtime.split(' ')[0]) : 0

    const newMovie: WatchedMovie = {
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
  const isDesktop = useResponsive()

  if (isLoading) {
    return (
      <View style={isDesktop ? styles.detailsStateDesktop : styles.detailsState}>
        <View style={isDesktop ? styles.detailsStateIconDesktop : styles.detailsStateIcon}>
          <Ionicons name="film-outline" size={isDesktop ? 32 : 28} color={colors.primary} />
        </View>

        <Text style={isDesktop ? styles.detailsStateTitleDesktop : styles.detailsStateTitle}>Loading movie...</Text>

        <Text style={isDesktop ? styles.detailsStateTextDesktop : styles.detailsStateText}>Getting the movie details for you.</Text>
      </View>
    )
  }

  if (error || !movie) {
    return (
      <View style={isDesktop ? styles.detailsStateDesktop : styles.detailsState}>
        <View style={isDesktop ? styles.detailsStateIconDesktop : styles.detailsStateIcon}>
          <Ionicons name="film-outline" size={isDesktop ? 32 : 28} color={colors.primary} />
        </View>

        <Text style={isDesktop ? styles.detailsStateTitleDesktop : styles.detailsStateTitle}>Movie not found</Text>

        <Text style={isDesktop ? styles.detailsStateTextDesktop : styles.detailsStateText}>We couldn't find any details for this movie.</Text>

        <Pressable style={isDesktop ? styles.detailsStateButtonDesktop : styles.detailsStateButton} onPress={handleCloseId}>
          <Text style={isDesktop ? styles.detailsStateButtonTextDesktop : styles.detailsStateButtonText}>Go back</Text>
        </Pressable>
      </View>
    )
  }

  return (
    <View style={isDesktop ? styles.detailsDesktop : styles.details}>
      {/* Header */}
      <View style={isDesktop ? styles.detailsTopBarDesktop : styles.detailsTopBar}>
        <Pressable style={isDesktop ? styles.btnBackDesktop : styles.btnBack} onPress={handleCloseId}>
          <Ionicons name="chevron-down" size={isDesktop ? 21 : 20} color={colors.text} />
        </Pressable>

        <Text style={isDesktop ? styles.detailsTopBarTitleDesktop : styles.detailsTopBarTitle}>Movie details</Text>
      </View>

      <BottomSheetScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={isDesktop ? styles.detailsScrollContentDesktop : styles.detailsScrollContent}
      >
        {/* Main information */}
        <View style={isDesktop ? styles.detailsMainDesktop : styles.detailsMain}>
          <Image source={{ uri: poster }} style={isDesktop ? styles.detailsImageDesktop : styles.detailsImage} />

          <View style={isDesktop ? styles.detailsOverviewDesktop : styles.detailsOverview}>
            <Text style={isDesktop ? styles.detailsTitleDesktop : styles.detailsTitle}>{title}</Text>

            <Text style={isDesktop ? styles.detailsMetaDesktop : styles.detailsMeta}>
              {released} · {type ? type[0].toUpperCase() + type.slice(1) : ''}
              {' · '}
              {type === 'series' ? `${seasons} seasons` : runtime}
            </Text>

            <View style={styles.detailsInfo}>
              <Ionicons name="stats-chart" size={isDesktop ? 18 : 17} color={colors.primary} />

              <Text style={isDesktop ? styles.detailsInfoTextDesktop : styles.detailsInfoText}>{imdbRating} IMDb</Text>
            </View>

            <Text style={isDesktop ? styles.detailsGenreDesktop : styles.detailsGenre}>{genre}</Text>
          </View>
        </View>

        {/* Description */}
        <View style={isDesktop ? styles.detailsContentDesktop : styles.detailsContent}>
          <Text style={isDesktop ? styles.detailsSectionTitleDesktop : styles.detailsSectionTitle}>Overview</Text>

          <Text style={isDesktop ? styles.detailsTextDesktop : styles.detailsText}>{plot}</Text>

          {awards !== 'N/A' && (
            <View style={styles.detailsRow}>
              <Ionicons name="trophy-outline" size={isDesktop ? 18 : 17} color={colors.primary} />

              <Text style={isDesktop ? styles.detailsTextDesktop : styles.detailsText}>{awards}</Text>
            </View>
          )}

          <View style={styles.detailsCredits}>
            <Text style={isDesktop ? styles.detailsCreditLabelDesktop : styles.detailsCreditLabel}>Starring</Text>

            <Text style={isDesktop ? styles.detailsTextDesktop : styles.detailsText}>{actors}</Text>
          </View>

          <View style={styles.detailsCredits}>
            <Text style={isDesktop ? styles.detailsCreditLabelDesktop : styles.detailsCreditLabel}>
              {director === 'N/A' ? 'Written by' : 'Directed by'}
            </Text>

            <Text style={isDesktop ? styles.detailsTextDesktop : styles.detailsText}>{director === 'N/A' ? writer : director}</Text>
          </View>
        </View>

        {/* Rating */}
        <View style={isDesktop ? styles.ratingDesktop : styles.rating}>
          {!isWatched ? (
            <>
              <View>
                <Text style={isDesktop ? styles.ratingTitleDesktop : styles.ratingTitle}>Your rating</Text>

                <Text style={isDesktop ? styles.ratingSubtitleDesktop : styles.ratingSubtitle}>How would you rate this movie?</Text>
              </View>

              <StarRating maxRating={10} color="#FFD700" onSetRating={setUserRating} />

              {userRating > 0 && (
                <Pressable style={isDesktop ? styles.btnAddDesktop : styles.btnAdd} onPress={handleAdd}>
                  <Ionicons name="add" size={isDesktop ? 17 : 16} color={colors.text} />

                  <Text style={isDesktop ? styles.btnAddTextDesktop : styles.btnAddText}>Add to List</Text>
                </Pressable>
              )}
            </>
          ) : (
            <View style={styles.alreadyRated}>
              <Ionicons name="star" size={isDesktop ? 19 : 18} color="#fcc416" />

              <Text style={isDesktop ? styles.detailsTextDesktop : styles.detailsText}>You rated this movie {watchedUserRating}/10</Text>
            </View>
          )}
        </View>

        <Toast type="success" visible={toastVisible} />
      </BottomSheetScrollView>
    </View>
  )
}
