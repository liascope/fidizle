import { ActivityIndicator, View } from 'react-native'
import { styles } from '../styles/global'

export default function Loader() {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color="#7950f2" />
    </View>
  )
}
