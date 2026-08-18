import { useRef } from 'react'
import { TextInput } from 'react-native'
import { colors, styles } from '../styles/global'

export default function Search({ query, setSearchQuery }: { query: string; setSearchQuery: (value: string) => void }) {
  const inputEl = useRef<TextInput>(null)

  const handleSubmit = () => {
    inputEl.current?.blur()
  }

  return (
    <TextInput
      ref={inputEl}
      style={styles.search}
      placeholder="Search movies..."
      placeholderTextColor={colors.textDark}
      value={query}
      onChangeText={setSearchQuery}
      onSubmitEditing={handleSubmit}
      returnKeyType="search"
    />
  )
}
