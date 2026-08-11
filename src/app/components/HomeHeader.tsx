import { Text, View } from 'react-native'
import { styles } from '../styles/global'

export default function HomeHeader({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.navBar}>
      <View style={styles.logo}>
        <Text style={styles.logoIcon}>🎬</Text>
        <Text style={styles.logoTitle}>fidizle</Text>
      </View>
      {children}
    </View>
  )
}
