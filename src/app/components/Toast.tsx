import { useEffect, useRef } from 'react'
import { Animated, Text, View, StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { colors } from '../styles/global'

type ToastType = 'success' | 'removed'

type ToastProps = {
  visible: boolean
  type?: ToastType
  duration?: number
}

export default function Toast({ visible, type = 'success', duration = 2200 }: ToastProps) {
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

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    bottom: 24,
    left: 20,
    right: 20,
    minHeight: 52,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.black100,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.black900,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 12,
    zIndex: 9999,
  },

  toastIcon: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: colors.lightRed,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 11,
    borderWidth: 1,
    borderColor: colors.redBorder,
  },

  toastIconText: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '800',
  },

  toastText: {
    flex: 1,

    color: colors.text,
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.1,
  },
})
