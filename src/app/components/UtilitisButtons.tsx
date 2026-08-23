import { useEffect, useState } from 'react'
import { Pressable, Text, View, StyleSheet, Share } from 'react-native'
import { Link, usePathname } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'

import { colors } from '../styles/global'
import { useTheme } from '../context/ThemeContext'

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export default function MobileButtons() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const { theme, toggleTheme } = useTheme()

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

  function handleThemeToggle() {
    toggleTheme()
    setIsOpen(false)

    progress.value = withTiming(0, {
      duration: 180,
    })
  }

  async function handleShare() {
    try {
      await Share.share({
        message: 'Check out Fidizle — your movie & series archive.',
      })
    } catch (error) {
      console.error('Failed to share:', error)
    }
  }

  const themeStyle = useAnimatedStyle(() => ({
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

  const shareStyle = useAnimatedStyle(() => ({
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

  const aboutStyle = useAnimatedStyle(() => ({
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
      {/* Theme */}
      <Animated.View style={[styles.mobileNavItem, themeStyle]}>
        <Pressable style={styles.mobileNavButton} onPress={handleThemeToggle}>
          <Ionicons name={theme === 'dark' ? 'sunny-outline' : 'moon-outline'} size={19} color={colors.text} />
        </Pressable>

        <Text style={styles.mobileNavLabel}>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</Text>
      </Animated.View>

      {/* Share */}
      <Animated.View style={[styles.mobileNavItem, shareStyle]}>
        <Pressable style={styles.mobileNavButton} onPress={handleShare}>
          <Ionicons name="share-outline" size={19} color={colors.text} />
        </Pressable>

        <Text style={styles.mobileNavLabel}>Share</Text>
      </Animated.View>

      {/* About */}
      <Animated.View style={[styles.mobileNavItem, aboutStyle]}>
        <Link href="/about" asChild>
          <Pressable style={styles.mobileNavButton}>
            <Ionicons name="information-outline" size={19} color={colors.text} />
          </Pressable>
        </Link>

        <Text style={styles.mobileNavLabel}>About</Text>
      </Animated.View>

      {/* Main button */}
      <AnimatedPressable style={[styles.mobileNavMain, mainButtonStyle]} onPress={toggleMenu}>
        <Ionicons name="add" size={25} color={colors.text} />
      </AnimatedPressable>
    </View>
  )
}

const styles = StyleSheet.create({
  mobileNavigation: {
    position: 'absolute',
    right: 20,
    bottom: 60,
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
    backgroundColor: colors.darkRed100,
    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: colors.lightRed,
  },

  mobileNavLabel: {
    position: 'absolute',
    right: 56,
    color: colors.text,
    fontSize: 11,
    fontWeight: '700',
    backgroundColor: colors.darkRed100,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    overflow: 'hidden',
  },
})
