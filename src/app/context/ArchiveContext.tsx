import { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { WatchedMovie } from '../components/WatchedSummary'

type ArchiveContextType = {
  watched: WatchedMovie[]
  movies: WatchedMovie[]
  series: WatchedMovie[]
  setWatched: React.Dispatch<React.SetStateAction<WatchedMovie[]>>
}

const ArchiveContext = createContext<ArchiveContextType | undefined>(undefined)

export function ArchiveProvider({ children }: { children: React.ReactNode }) {
  const [watched, setWatched] = useState<WatchedMovie[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    async function loadArchive() {
      try {
        const storedValue = await AsyncStorage.getItem('watched')

        if (storedValue !== null) {
          setWatched(JSON.parse(storedValue))
        }
      } catch (error) {
        console.error('Failed to load archive:', error)
      } finally {
        setIsLoaded(true)
      }
    }

    loadArchive()
  }, [])

  useEffect(() => {
    if (!isLoaded) return

    async function saveArchive() {
      try {
        await AsyncStorage.setItem('watched', JSON.stringify(watched))
      } catch (error) {
        console.error('Failed to save archive:', error)
      }
    }

    saveArchive()
  }, [watched, isLoaded])

  const movies = watched.filter((item) => item.type === 'movie')
  const series = watched.filter((item) => item.type === 'series')

  return (
    <ArchiveContext.Provider
      value={{
        watched,
        movies,
        series,
        setWatched,
      }}
    >
      {children}
    </ArchiveContext.Provider>
  )
}

export function useArchived() {
  const context = useContext(ArchiveContext)

  if (!context) {
    throw new Error('useArchived must be used inside ArchiveProvider')
  }

  return context
}
