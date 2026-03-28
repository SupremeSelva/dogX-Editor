import React from 'react'
import { Button } from '@/shared/components/ui'
import { useEditorStore } from '@/store/editorStore'
import { EditorBridge } from '@/core/bridge'
import { cn } from '@/lib/tailwind/cn'
import { Bold, Italic, Underline, Strikethrough, Superscript, Subscript } from 'lucide-react'

interface CharacterFormattingProps {
  bridge: EditorBridge;
}

export const CharacterFormatting: React.FC<CharacterFormattingProps> = ({ bridge }) => {
  const { selection } = useEditorStore()

  return (
    <div className="flex items-center gap-1">
      <Button
        variant="toolbar"
        size="icon-sm"
        onClick={() => bridge.executeCommand('bold')}
        className={cn(selection.isBold && 'bg-toolbar-active-bg text-primary-700')}
        title="Bold (Ctrl+B)"
      >
        <Bold className="h-4 w-4" />
      </Button>

      <Button
        variant="toolbar"
        size="icon-sm"
        onClick={() => bridge.executeCommand('italic')}
        className={cn(selection.isItalic && 'bg-toolbar-active-bg text-primary-700')}
        title="Italic (Ctrl+I)"
      >
        <Italic className="h-4 w-4" />
      </Button>

      <Button
        variant="toolbar"
        size="icon-sm"
        onClick={() => bridge.executeCommand('underline')}
        className={cn(selection.isUnderline && 'bg-toolbar-active-bg text-primary-700')}
        title="Underline (Ctrl+U)"
      >
        <Underline className="h-4 w-4" />
      </Button>

      <Button
        variant="toolbar"
        size="icon-sm"
        onClick={() => bridge.executeCommand('strikeout')}
        className={cn(selection.isStrikeout && 'bg-toolbar-active-bg text-primary-700')}
        title="Strikethrough"
      >
        <Strikethrough className="h-4 w-4" />
      </Button>

      <Button
        variant="toolbar"
        size="icon-sm"
        onClick={() => bridge.executeCommand('superscript')}
        title="Superscript"
      >
        <Superscript className="h-4 w-4" />
      </Button>

      <Button
        variant="toolbar"
        size="icon-sm"
        onClick={() => bridge.executeCommand('subscript')}
        title="Subscript"
      >
        <Subscript className="h-4 w-4" />
      </Button>

      <div className="w-px h-6 bg-border mx-1" />

      <input
        type="color"
        value={selection.color}
        onChange={(e) => bridge.executeCommand('color', e.target.value)}
        className="w-8 h-8 rounded cursor-pointer"
        title="Text Color"
      />

      <input
        type="color"
        value={selection.highlight || '#ffffff'}
        onChange={(e) => bridge.executeCommand('highlight', e.target.value)}
        className="w-8 h-8 rounded cursor-pointer"
        title="Highlight"
      />
    </div>
  )
}
