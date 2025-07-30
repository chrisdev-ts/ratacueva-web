//C:\Users\Misrael\Documents\WEBS\ratacueva-web\src\components\organisms\search\search-suggestions.tsx
"use client"
import { Search, TrendingUp } from "lucide-react"
import { Body } from "@/components/atoms/Typography"

interface SearchSuggestionsProps {
  query: string
  suggestions: string[]
  onSelect: (suggestion: string) => void
  onClose: () => void
}

export default function SearchSuggestions({ query, suggestions, onSelect, onClose }: SearchSuggestionsProps) {
  const filteredSuggestions = suggestions
    .filter((suggestion) => suggestion.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 8)

  if (filteredSuggestions.length === 0) return null

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div className="absolute top-full left-0 right-0 mt-2 bg-zinc-800 border border-zinc-700 rounded-2xl shadow-xl z-50 max-h-80 overflow-y-auto">
        <div className="p-2">
          {filteredSuggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => onSelect(suggestion)}
              className="w-full px-4 py-3 text-left hover:bg-zinc-700 rounded-lg transition-colors flex items-center gap-3"
            >
              <Search className="w-4 h-4 text-zinc-400 flex-shrink-0" />
              <Body className="text-white flex-1">{suggestion}</Body>
              <TrendingUp className="w-4 h-4 text-zinc-500" />
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

