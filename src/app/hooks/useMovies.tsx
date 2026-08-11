import { useEffect, useState } from 'react'

const apiKey = process.env.EXPO_PUBLIC_OMDB_API_KEY

export function useMovies(query: string) {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function fetchMovies() {
      try {
        setIsLoading(true)
        setError('')

        const res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(query)}`, {
          signal: controller.signal,
        })

        if (!res.ok) {
          throw new Error('Something went wrong with fetching movies')
        }

        const data = await res.json()

        if (data.Response === 'False') {
          throw new Error('Movie not found')
        }

        setMovies(data.Search ?? [])
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          setError(err.message)
        }
      } finally {
        setIsLoading(false)
      }
    }

    if (!query.trim().length) {
      setMovies([])
      setError('')
      setIsLoading(false)
      return
    }

    fetchMovies()

    return () => {
      controller.abort()
    }
  }, [query])

  return {
    movies,
    isLoading,
    error,
  }
}
