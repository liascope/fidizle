import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function useLocalStorage<T extends { type: string }>(initialState: T[], key: string) {
  const [value, setValue] = useState<T[]>(initialState)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    async function load() {
      try {
        const storedValue = await AsyncStorage.getItem(key)

        if (storedValue !== null) {
          setValue(JSON.parse(storedValue))
        }
      } catch (error) {
        console.error('Failed to load storage:', error)
      } finally {
        setIsLoaded(true)
      }
    }

    load()
  }, [key])

  useEffect(() => {
    if (!isLoaded) return

    AsyncStorage.setItem(key, JSON.stringify(value))
  }, [value, key, isLoaded])

  const movies = value.filter((item) => item.type === 'movie')
  const series = value.filter((item) => item.type === 'series')

  return {
    watched: value,
    setWatched: setValue,
    movies,
    series,
  }
}
