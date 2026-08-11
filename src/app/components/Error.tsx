import { Text, View } from 'react-native'
import { styles } from '../styles/global'

export default function Error({ message }: { message: string }) {
  return (
    <View style={styles.error}>
      <Text style={styles.errorText}>{message}</Text>
    </View>
  )
}
