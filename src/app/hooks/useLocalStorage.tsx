import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function useLocalStorage<T>(initialState: T, key: string) {
  const [value, setValue] = useState<T>(initialState)

  useEffect(() => {
    async function load() {
      const storedValue = await AsyncStorage.getItem(key)

      if (storedValue) {
        setValue(JSON.parse(storedValue))
      }
    }

    load()
  }, [key])

  useEffect(() => {
    AsyncStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue] as const
}
