import { Pressable, Text, View } from 'react-native'
import { router } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient'
import { useSearch } from '../context/SearchContext'
import SearchResults from '../components/SearchResults'
import { colors, styles } from '../styles/global'

import { useRef, useEffect } from 'react'
import { Animated } from 'react-native'

export default function SearchScreen() {
  const searchOpacity = useRef(new Animated.Value(0.4)).current
  const { query } = useSearch()

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
    <LinearGradient colors={['#090909', '#260909', '#090909']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ flex: 1 }}>
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
          <Text style={styles.resultsTitle}> Search results</Text>
        </View>
      </View>

      {query.trim().length > 0 ? <SearchResults query={query} /> : null}
    </LinearGradient>
  )
}
