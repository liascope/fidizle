import { useRef } from 'react'
import { TextInput } from 'react-native'
import { router, usePathname } from 'expo-router'

import { colors, styles } from '../styles/global'

export default function Search({ query, setSearchQuery }: { query: string; setSearchQuery: (value: string) => void }) {
  const inputEl = useRef<TextInput>(null)
  const pathname = usePathname()

  function handleChangeText(value: string) {
    setSearchQuery(value)

    if (value.trim().length > 1 && pathname !== '/search') {
      router.push('/search')
    }
  }

  function handleSubmit() {
    inputEl.current?.blur()
  }

  return (
    <TextInput
      ref={inputEl}
      style={styles.search}
      placeholder="Search titles..."
      placeholderTextColor={colors.textDark}
      value={query}
      onChangeText={handleChangeText}
      onSubmitEditing={handleSubmit}
      returnKeyType="search"
    />
  )
}
