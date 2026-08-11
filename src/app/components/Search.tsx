import { useRef } from 'react'
import { TextInput } from 'react-native'
import { styles, colors } from '../styles/global'

export default function Search({ query, setQuery }: { query: string; setQuery: (value: string) => void }) {
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
      onChangeText={setQuery}
      onSubmitEditing={handleSubmit}
      returnKeyType="search"
    />
  )
}
