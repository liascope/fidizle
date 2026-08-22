import { useEffect, useState } from 'react'
import { Pressable, Text, View, StyleSheet } from 'react-native'
import { Link, usePathname } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'

import { colors } from '../styles/global'

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export default function MobileButtons() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const progress = useSharedValue(0)

  useEffect(() => {
    setIsOpen(false)
    progress.value = withTiming(0, {
      duration: 180,
    })
  }, [pathname])

  function toggleMenu() {
    const nextState = !isOpen

    setIsOpen(nextState)

    progress.value = withSpring(nextState ? 1 : 0, {
      damping: 16,
      stiffness: 180,
      mass: 0.7,
    })
  }

  const homeStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withTiming(-72 * progress.value, {
          duration: 220,
        }),
      },
      {
        translateX: withTiming(-8 * progress.value, {
          duration: 220,
        }),
      },
      {
        scale: 0.8 + progress.value * 0.2,
      },
    ],
    opacity: progress.value,
  }))

  const moviesStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withTiming(-128 * progress.value, {
          duration: 260,
        }),
      },
      {
        translateX: withTiming(-48 * progress.value, {
          duration: 260,
        }),
      },
      {
        scale: 0.8 + progress.value * 0.2,
      },
    ],
    opacity: progress.value,
  }))

  const seriesStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withTiming(-174 * progress.value, {
          duration: 300,
        }),
      },
      {
        translateX: withTiming(-4 * progress.value, {
          duration: 300,
        }),
      },
      {
        scale: 0.8 + progress.value * 0.2,
      },
    ],
    opacity: progress.value,
  }))

  const mainButtonStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: `${progress.value * 45}deg`,
      },
    ],
  }))

  return (
    <View style={styles.mobileNavigation} pointerEvents="box-none">
      {/* Home */}
      <Animated.View style={[styles.mobileNavItem, homeStyle]}>
        <Link href="/" asChild>
          <Pressable style={styles.mobileNavButton}>
            <Ionicons name="home-outline" size={19} color={colors.text} />
          </Pressable>
        </Link>

        <Text style={styles.mobileNavLabel}>Home</Text>
      </Animated.View>

      {/* Movies */}
      <Animated.View style={[styles.mobileNavItem, moviesStyle]}>
        <Link href="/movies" asChild>
          <Pressable style={styles.mobileNavButton}>
            <Ionicons name="film-outline" size={19} color={colors.text} />
          </Pressable>
        </Link>

        <Text style={styles.mobileNavLabel}>Movies</Text>
      </Animated.View>

      {/* Series */}
      <Animated.View style={[styles.mobileNavItem, seriesStyle]}>
        <Link href="/series" asChild>
          <Pressable style={styles.mobileNavButton}>
            <Ionicons name="tv-outline" size={19} color={colors.text} />
          </Pressable>
        </Link>

        <Text style={styles.mobileNavLabel}>Series</Text>
      </Animated.View>

      {/* Main button */}
      <AnimatedPressable style={[styles.mobileNavMain, mainButtonStyle]} onPress={toggleMenu}>
        <Ionicons name="add" size={25} color={colors.text} />
      </AnimatedPressable>
    </View>
  )
}

const styles = StyleSheet.create({
  // MobileButton
  mobileNavigation: {
    position: 'absolute',
    right: 20,
    bottom: 28,
    width: 60,
    height: 230,
    alignItems: 'center',
    justifyContent: 'flex-end',
    zIndex: 100,
  },

  mobileNavItem: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    alignItems: 'center',
  },

  mobileNavMain: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },

  mobileNavButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: colors.black400,
    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: colors.black900,
  },

  mobileNavLabel: {
    position: 'absolute',
    right: 56,
    color: colors.text,
    fontSize: 11,
    fontWeight: '700',
    backgroundColor: colors.black100,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    overflow: 'hidden',
  },
})
