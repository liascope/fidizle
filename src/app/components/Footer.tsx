import { styles } from '../styles/global'
import { View, Text } from 'react-native'

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        <Text style={styles.footerBrand}>fidizle</Text>
        {' | © 2026 liascope'}
      </Text>
    </View>
  )
}
