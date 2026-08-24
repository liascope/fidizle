import { Pressable, Text, View, StyleSheet } from 'react-native'
import { Share } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

import { useArchived } from '../context/ArchiveContext'
import { useTheme } from '../context/ThemeContext'

type ShareArchiveProps = {
  onClose: () => void
}

export default function ShareArchive({ onClose }: ShareArchiveProps) {
  const { movies, series } = useArchived()
  const { colors } = useTheme()

  async function shareArchive(type: 'movie' | 'series') {
    const archive = type === 'movie' ? movies : series

    if (archive.length === 0) {
      return
    }

    const title = type === 'movie' ? 'Movies' : 'Series'
    const icon = type === 'movie' ? '🎬' : '📺'

    const list = archive
      .map((item, index) => {
        const rating = item.userRating ? ` · My rating: ${item.userRating}/10` : ''

        return `${index + 1}. ${item.title}${rating}`
      })
      .join('\n')

    const message = ['Fidizle — My Archive', '', `${icon} ${title}`, '', list, '', `Total: ${archive.length}`, '', 'Shared from Fidizle.'].join('\n')

    try {
      await Share.share({
        message,
      })

      onClose()
    } catch (error) {
      console.error('Failed to share archive:', error)
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.black400 }]}>
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <Text style={[styles.title, { color: colors.text }]}>Share archive</Text>

        <Pressable onPress={onClose} hitSlop={8}>
          <Ionicons name="close" size={22} color={colors.textDark} />
        </Pressable>
      </View>

      <Text style={[styles.subtitle, { color: colors.textDark }]}>Choose what you want to share.</Text>

      <Pressable
        style={[
          styles.option,
          {
            backgroundColor: colors.black,
            borderColor: colors.border,
          },
        ]}
        onPress={() => shareArchive('movie')}
        disabled={movies.length === 0}
      >
        <View style={styles.optionIcon}>
          <Ionicons name="film-outline" size={22} color={colors.primary} />
        </View>

        <View style={styles.optionContent}>
          <Text style={[styles.optionTitle, { color: colors.text }]}>Movies</Text>

          <Text style={[styles.optionCount, { color: colors.textDark }]}>
            {movies.length} {movies.length === 1 ? 'movie' : 'movies'}
          </Text>
        </View>

        <Ionicons name="chevron-forward" size={20} color={colors.textDark} />
      </Pressable>

      <Pressable
        style={[
          styles.option,
          {
            backgroundColor: colors.black,
            borderColor: colors.border,
          },
        ]}
        onPress={() => shareArchive('series')}
        disabled={series.length === 0}
      >
        <View style={styles.optionIcon}>
          <Ionicons name="tv-outline" size={22} color={colors.primary} />
        </View>

        <View style={styles.optionContent}>
          <Text style={[styles.optionTitle, { color: colors.text }]}>Series</Text>

          <Text style={[styles.optionCount, { color: colors.textDark }]}>
            {series.length} {series.length === 1 ? 'series' : 'series'}
          </Text>
        </View>

        <Ionicons name="chevron-forward" size={20} color={colors.textDark} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 22,
    borderRadius: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 16,
    borderBottomWidth: 1,
  },

  title: {
    fontSize: 18,
    fontWeight: '800',
  },

  subtitle: {
    fontSize: 13,
    marginTop: 14,
    marginBottom: 18,
  },

  option: {
    minHeight: 68,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 10,
    borderRadius: 14,
    borderWidth: 1,
  },

  optionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  optionContent: {
    flex: 1,
    marginLeft: 12,
  },

  optionTitle: {
    fontSize: 14,
    fontWeight: '700',
  },

  optionCount: {
    fontSize: 12,
    marginTop: 3,
  },
})
