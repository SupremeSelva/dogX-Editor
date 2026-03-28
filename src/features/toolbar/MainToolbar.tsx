import React, { useState } from 'react'
import { EditorBridge } from '@/core/bridge'
import { useEditorStore } from '@/store/editorStore'
import { useUIStore } from '@/store/uiStore'
import { Button } from '@/shared/components/ui'
import { Undo, Redo, Search, Printer } from 'lucide-react'
import { TextEditsToolbar } from '../text-edits'
import { PageEditsToolbar } from '../page-edits'
import { InsertToolbar } from '../insert'
import { ExportButtons } from '../download/ExportButtons'

interface MainToolbarProps {
  bridge: EditorBridge;
}

export const MainToolbar: React.FC<MainToolbarProps> = ({ bridge }) => {
  const { canUndo, canRedo } = useEditorStore()
  const { setSearchOpen } = useUIStore()
  const [activeTab, setActiveTab] = useState<'text' | 'page' | 'insert'>('text')

  return (
    <div className="border-b bg-white dark:bg-gray-900">
      <div className="flex items-center justify-between px-4 py-2 border-b">
        <div className="flex items-center gap-2">
          <Button
            variant="toolbar"
            size="icon-sm"
            onClick={() => bridge.executeCommand('undo')}
            disabled={!canUndo}
            title="Undo (Ctrl+Z)"
          >
            <Undo className="h-4 w-4" />
          </Button>

          <Button
            variant="toolbar"
            size="icon-sm"
            onClick={() => bridge.executeCommand('redo')}
            disabled={!canRedo}
            title="Redo (Ctrl+Y)"
          >
            <Redo className="h-4 w-4" />
          </Button>

          <div className="w-px h-6 bg-border mx-2" />

          <div className="flex gap-1">
            <button
              onClick={() => setActiveTab('text')}
              className={`px-4 py-2 text-sm font-medium rounded ${
                activeTab === 'text' ? 'bg-toolbar-active-bg text-primary-700' : 'hover:bg-gray-100'
              }`}
            >
              Text Edits
            </button>
            <button
              onClick={() => setActiveTab('page')}
              className={`px-4 py-2 text-sm font-medium rounded ${
                activeTab === 'page' ? 'bg-toolbar-active-bg text-primary-700' : 'hover:bg-gray-100'
              }`}
            >
              Page
            </button>
            <button
              onClick={() => setActiveTab('insert')}
              className={`px-4 py-2 text-sm font-medium rounded ${
                activeTab === 'insert' ? 'bg-toolbar-active-bg text-primary-700' : 'hover:bg-gray-100'
              }`}
            >
              Insert
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="toolbar"
            size="icon-sm"
            onClick={() => setSearchOpen(true)}
            title="Find & Replace"
          >
            <Search className="h-4 w-4" />
          </Button>

          <Button
            variant="toolbar"
            size="icon-sm"
            onClick={() => bridge.executeCommand('print')}
            title="Print"
          >
            <Printer className="h-4 w-4" />
          </Button>

          <ExportButtons bridge={bridge} />
        </div>
      </div>

      {activeTab === 'text' && <TextEditsToolbar bridge={bridge} />}
      {activeTab === 'page' && <PageEditsToolbar bridge={bridge} />}
      {activeTab === 'insert' && <InsertToolbar bridge={bridge} />}
    </div>
  )
}
