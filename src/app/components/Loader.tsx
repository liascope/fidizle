import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { colors } from '../styles/global'

export default function Loader() {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  )
}
const styles = StyleSheet.create({
  loader: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    margin: 48,
    color: colors.text,
  },
})
