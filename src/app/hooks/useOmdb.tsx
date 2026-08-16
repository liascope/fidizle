import { useEffect, useState } from 'react'

const apiKey = process.env.EXPO_PUBLIC_OMDB_API_KEY

type UseOmdbProps = {
  query?: string
  id?: string | null
}

export function useOmdb({ query, id }: UseOmdbProps) {
  const [movies, setMovies] = useState<any[]>([])
  const [movie, setMovie] = useState<any | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function fetchMovies() {
      try {
        setIsLoading(true)
        setError('')

        const params = id ? `i=${encodeURIComponent(id)}` : `s=${encodeURIComponent(query ?? '')}`

        const res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&${params}`, {
          signal: controller.signal,
        })

        if (!res.ok) {
          throw new Error('Something went wrong with fetching data')
        }

        const data = await res.json()

        if (data.Response === 'False') {
          throw new Error(data.Error || 'No results found')
        }

        if (id) {
          setMovie(data)
        } else {
          setMovies(data.Search ?? [])
        }
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          setError(err.message)
        }
      } finally {
        setIsLoading(false)
      }
    }

    if (id) {
      fetchMovies()
    } else if (query?.trim()) {
      fetchMovies()
    } else {
      setMovies([])
      setMovie(null)
      setError('')
      setIsLoading(false)
    }

    return () => {
      controller.abort()
    }
  }, [query, id])

  return {
    movies,
    movie,
    isLoading,
    error,
  }
}
