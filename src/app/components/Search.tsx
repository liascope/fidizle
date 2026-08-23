import { useRef } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { router, usePathname } from 'expo-router'
import { useTheme } from '../context/ThemeContext'
import { createStyles } from '../styles/global'
export default function Search({ query, setSearchQuery }: { query: string; setSearchQuery: (value: string) => void }) {
  const { colors } = useTheme()
  const styles = createStyles(colors)

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
