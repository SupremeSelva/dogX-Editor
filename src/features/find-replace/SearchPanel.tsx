import React from 'react'
import { Button } from '@/shared/components/ui'
import { useUIStore } from '@/store/uiStore'
import { EditorBridge } from '@/core/bridge'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface SearchPanelProps {
  bridge: EditorBridge;
}

export const SearchPanel: React.FC<SearchPanelProps> = ({ bridge }) => {
  const { 
    searchOpen, 
    searchKeyword, 
    replaceWith, 
    matchCase, 
    useRegex,
    setSearchOpen,
    setSearchKeyword,
    setReplaceWith,
    setMatchCase,
    setUseRegex
  } = useUIStore()

  const handleSearch = () => {
    bridge.executeCommand('search', { keyword: searchKeyword })
  }

  const handleReplace = () => {
    bridge.executeCommand('replace', { keyword: searchKeyword, replaceWith })
  }

  if (!searchOpen) return null

  return (
    <div className="absolute top-16 right-4 bg-white dark:bg-gray-800 border rounded-lg shadow-xl p-4 z-modal w-96">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">Find and Replace</h3>
        <button onClick={() => setSearchOpen(false)} className="p-1 hover:bg-gray-100 rounded">
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="Find"
            className="flex-1 px-3 py-2 border rounded"
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <Button size="icon-sm" onClick={handleSearch}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button size="icon-sm" onClick={handleSearch}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            value={replaceWith}
            onChange={(e) => setReplaceWith(e.target.value)}
            placeholder="Replace with"
            className="flex-1 px-3 py-2 border rounded"
          />
          <Button size="sm" onClick={handleReplace}>
            Replace
          </Button>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={useRegex}
              onChange={(e) => setUseRegex(e.target.checked)}
            />
            Regex
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={matchCase}
              onChange={(e) => setMatchCase(e.target.checked)}
            />
            Match case
          </label>
        </div>
      </div>
    </div>
  )
}
