import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

type StarRatingProps = {
  maxRating?: number
  defaultRating?: number
  color?: string
  size?: number
  messages?: string[]
  onSetRating?: (rating: number) => void
}

type StarProps = {
  onRate: () => void
  full: boolean
  color: string
  size: number
}

export default function StarRating({ maxRating = 5, defaultRating = 0, color = '#fcc416', size = 24, messages = [], onSetRating }: StarRatingProps) {
  const [rating, setRating] = useState(defaultRating)

  function handleRating(value: number) {
    setRating(value)
    onSetRating?.(value)
  }

  const currentMessage = messages.length === maxRating ? (messages[rating - 1] ?? '') : rating > 0 ? `${rating}/${maxRating}` : ''

  return (
    <View style={styles.ratingContainer}>
      <View style={styles.starContainer}>
        {Array.from({ length: maxRating }, (_, index) => {
          const starNumber = index + 1

          return <Star key={starNumber} full={rating >= starNumber} onRate={() => handleRating(starNumber)} color={color} size={size} />
        })}
      </View>

      {currentMessage !== '' && (
        <Text
          style={[
            styles.ratingText,
            {
              color,
              fontSize: size * 0.6,
            },
          ]}
        >
          {currentMessage}
        </Text>
      )}
    </View>
  )
}

function Star({ onRate, full, color, size }: StarProps) {
  return (
    <Pressable
      onPress={onRate}
      style={({ pressed }) => [
        styles.starButton,
        {
          width: size,
          height: size,
          opacity: pressed ? 0.5 : 1,
        },
      ]}
    >
      <Ionicons name={full ? 'star' : 'star-outline'} size={size} color={color} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },

  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  starButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  star: {
    textAlign: 'center',
    fontWeight: 'bold',
  },

  ratingText: {
    fontWeight: '600',
  },
})
