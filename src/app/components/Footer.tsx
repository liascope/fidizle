import { styles } from '../styles/global'
import { View, Text } from 'react-native'

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        fidizle | © {new Date().getFullYear()} <Text style={styles.footerBrand}>liascope</Text>
      </Text>
    </View>
  )
}
