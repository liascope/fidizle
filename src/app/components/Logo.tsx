import { Text, View, Image, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import { colors } from '../styles/global'
import useResponsive from '../hooks/useResponsive'

export default function Logo({ about = false }) {
  const isDesktop = useResponsive()
  return (
    <Link href="/">
      <View style={isDesktop ? styles.logoDesktop : styles.logo}>
        <Image source={require('@/assets/clapboard.png')} style={isDesktop ? styles.logoIconDesktop : styles.logoIcon} />
        <Text style={isDesktop ? styles.logoTitleDesktop : styles.logoTitle}>fidizle</Text>
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
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  logoTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.primary,
  },

  logoDesktop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },

  logoIconDesktop: {
    width: 34,
    height: 34,
    resizeMode: 'contain',
  },

  logoTitleDesktop: {
    fontSize: 30,
    fontWeight: '800',
    color: colors.primary,
  },
})
