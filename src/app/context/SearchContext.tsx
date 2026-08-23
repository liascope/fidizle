import { createContext, useContext, useState, Dispatch, SetStateAction } from 'react'

type SearchContextType = {
  query: string
  setQuery: (query: string) => void
  selectedId: string | null
  setSelectedId: Dispatch<SetStateAction<string | null>>
  setSearchQuery: (value: string) => void
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState('')
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const setSearchQuery = (value: string) => {
    setQuery(value)
    setSelectedId(null)
  }
  return <SearchContext.Provider value={{ query, setQuery, selectedId, setSelectedId, setSearchQuery }}>{children}</SearchContext.Provider>
}

export function useSearch() {
  const context = useContext(SearchContext)

  if (!context) {
    throw new Error('useSearch must be used inside SearchProvider')
  }

  return context
}
