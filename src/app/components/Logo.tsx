import { View, Image, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import useResponsive from '../hooks/useResponsive'

export default function Logo() {
  const isDesktop = useResponsive()

  return (
    <Link href="/">
      <View style={isDesktop ? styles.logoDesktop : styles.logo}>
        <Image source={require('@/assets/logo.png')} style={isDesktop ? styles.logoIconDesktop : styles.logoIcon} />
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
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },

  logoDesktop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },

  logoIconDesktop: {
    width: 95,
    height: 95,
    resizeMode: 'contain',
  },
})
