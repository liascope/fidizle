import { View, Image, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import { colors } from '../styles/global'
import useResponsive from '../hooks/useResponsive'
import { useTheme } from '../context/ThemeContext'

export default function Logo() {
  const isDesktop = useResponsive()
  const { theme } = useTheme()

  return (
    <Link href="/">
      <View style={isDesktop ? styles.logoDesktop : styles.logo}>
        <Image
          source={require('@/assets/appLogo.png')}
          // source={theme === 'dark' ? require('@/assets/logo2.png') : require('@/assets/logo1.png')}
          style={isDesktop ? styles.logoIconDesktop : styles.logoIcon}
        />
      </View>
    </Link>
  )
}

const styles = StyleSheet.create({
  logo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,
    flex: 1,
  },

  logoIcon: {
    width: 82,
    height: 82,
    resizeMode: 'contain',
  },

  // logoTitle: {
  //   fontSize: 24,
  //   fontWeight: '800',
  //   color: colors.primary,
  // },

  logoDesktop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },

  logoIconDesktop: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },

  // logoTitleDesktop: {
  //   fontSize: 30,
  //   fontWeight: '800',
  //   color: colors.primary,
  // },
})
