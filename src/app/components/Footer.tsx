import { Linking, Pressable, Text, View } from 'react-native'
import { styles } from '../styles/global'

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        <Text style={styles.footerBrand}>fidizle</Text> {' | © 2026 liascope | '}{' '}
        <Pressable onPress={() => Linking.openURL('https://www.flaticon.com/free-icons/clapperboard')}>
          <Text style={styles.footerLink}>icon: smalllikeart</Text>
        </Pressable>
      </Text>
    </View>
  )
}
