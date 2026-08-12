import { Text, View, ImageBackground } from 'react-native'
import { styles } from '../styles/global'
import { LinearGradient } from 'expo-linear-gradient'

export default function HomeHeader({ children }: { children: React.ReactNode }) {
  return (
    <LinearGradient colors={['#090909', '#4b0707', '#090909']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.navBar}>
      {/* obere Filmperforation */}
      <View style={[styles.filmHoles, styles.filmHolesTop]}>
        {Array.from({ length: 18 }).map((_, i) => (
          <View key={i} style={styles.filmHole} />
        ))}
      </View>

      {/* Header-Inhalt */}
      <View style={styles.navBarContent}>
        <View style={styles.logo}>
          <Text style={styles.logoIcon}>🎬</Text>
          <Text style={styles.logoTitle}>fidizle</Text>
        </View>

        {children}
      </View>

      {/* untere Filmperforation */}
      <View style={[styles.filmHoles, styles.filmHolesBottom]}>
        {Array.from({ length: 18 }).map((_, i) => (
          <View key={i} style={styles.filmHole} />
        ))}
      </View>
    </LinearGradient>
  )
}
