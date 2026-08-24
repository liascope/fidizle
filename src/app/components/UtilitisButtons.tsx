import { useEffect, useState } from 'react'
import { Pressable, Text, View, StyleSheet, Modal } from 'react-native'
import { Link, usePathname } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import ShareArchive from './ShareArchive'
import { colors } from '../styles/global'
import { useTheme } from '../context/ThemeContext'

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export default function UtilitisButtons() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [shareOpen, setShareOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const progress = useSharedValue(0)
  function handleSharePress() {
    setIsOpen(false)

    progress.value = withTiming(0, {
      duration: 180,
    })

    setShareOpen(true)
  }
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
    <View style={styles.utilitisNavigation} pointerEvents="box-none">
      {/* Theme */}
      <Animated.View style={[styles.utilitisNavItem, themeStyle]}>
        <Pressable style={styles.utilitisNavButton} onPress={handleThemeToggle}>
          <Ionicons name={theme === 'dark' ? 'sunny-outline' : 'moon-outline'} size={19} color={colors.text} />
        </Pressable>

        <Text style={styles.utilitisNavLabel}>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</Text>
      </Animated.View>

      {/* Share */}
      <Animated.View style={[styles.utilitisNavItem, shareStyle]}>
        <Pressable style={styles.utilitisNavButton} onPress={handleSharePress}>
          <Ionicons name="share-outline" size={19} color={colors.text} />
        </Pressable>

        <Text style={styles.utilitisNavLabel}>Share</Text>
      </Animated.View>

      {/* About */}
      <Animated.View style={[styles.utilitisNavItem, aboutStyle]}>
        <Link href="/about" asChild>
          <Pressable style={styles.utilitisNavButton}>
            <Ionicons name="information-outline" size={19} color={colors.text} />
          </Pressable>
        </Link>

        <Text style={styles.utilitisNavLabel}>About</Text>
      </Animated.View>

      {/* Main button */}
      <AnimatedPressable style={[styles.utilitisNavMain, mainButtonStyle]} onPress={toggleMenu}>
        <Ionicons name="add" size={25} color={colors.text} />
      </AnimatedPressable>
      <Modal visible={shareOpen} transparent animationType="fade" onRequestClose={() => setShareOpen(false)}>
        <View style={styles.modalOverlay}>
          <ShareArchive onClose={() => setShareOpen(false)} />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  utilitisNavigation: {
    position: 'absolute',
    right: 20,
    bottom: 130,
    width: 60,
    height: 230,
    alignItems: 'center',
    justifyContent: 'flex-end',
    zIndex: 100,
  },

  utilitisNavItem: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    alignItems: 'center',
  },

  utilitisNavMain: {
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

  utilitisNavButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: colors.darkRed100,
    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: colors.lightRed,
  },

  utilitisNavLabel: {
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
  },
})
