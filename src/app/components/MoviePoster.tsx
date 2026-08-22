import { useState } from 'react'
import { View, Image } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { styles, colors } from '../styles/global'
export default function MoviePoster({ uri, type }: { uri: string; type: string }) {
  const [hasError, setHasError] = useState(uri === 'N/A')

  if (hasError) {
    return (
      <View style={styles.moviePoster}>
        <Ionicons name={type === 'series' ? 'tv-outline' : 'film-outline'} size={32} color={colors.textMuted} />
      </View>
    )
  }

  return <Image source={{ uri }} style={styles.moviePoster} onError={() => setHasError(true)} />
}
