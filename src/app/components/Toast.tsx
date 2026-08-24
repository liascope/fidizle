import { useEffect, useRef } from 'react'
import { Animated, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useTheme } from '../context/ThemeContext'
import { createStyles } from '../styles/global'

type ToastType = 'success' | 'removed'

type ToastProps = {
  visible: boolean
  type?: ToastType
  duration?: number
}

export default function Toast({ visible, type = 'success', duration = 2200 }: ToastProps) {
  const { colors } = useTheme()
  const styles = createStyles(colors)

  const opacity = useRef(new Animated.Value(0)).current
  const translateY = useRef(new Animated.Value(20)).current

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
        }),
      ]).start()

      const timeout = setTimeout(() => {
        Animated.parallel([
          Animated.timing(opacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.timing(translateY, {
            toValue: 20,
            duration: 200,
            useNativeDriver: true,
          }),
        ]).start()
      }, duration)

      return () => clearTimeout(timeout)
    }
  }, [visible, duration, opacity, translateY])

  if (!visible) return null

  const isSuccess = type === 'success'

  return (
    <Animated.View
      style={[
        styles.toast,
        {
          opacity,
          transform: [{ translateY }],
        },
      ]}
    >
      <View style={styles.toastIcon}>
        <Ionicons name={isSuccess ? 'checkmark' : 'remove'} size={16} color={colors.primary} />
      </View>

      <Text style={styles.toastText}>{isSuccess ? 'Added to your archive' : 'Removed from your archive'}</Text>
    </Animated.View>
  )
}
