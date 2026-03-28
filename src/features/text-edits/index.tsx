import React from 'react'
import { EditorBridge } from '@/core/bridge'
import { CharacterFormatting } from './components/CharacterFormatting'
import { FontSelector } from './components/FontSelector'
import { ParagraphFormatting } from './components/ParagraphFormatting'
import { ListTools } from './components/ListTools'
import { StyleSelector } from './components/StyleSelector'
import { FormatTools } from './components/FormatTools'

interface TextEditsToolbarProps {
  bridge: EditorBridge;
}

export const TextEditsToolbar: React.FC<TextEditsToolbarProps> = ({ bridge }) => {
  return (
    <div className="flex items-center gap-4 px-4 py-2 bg-toolbar-bg border-b">
      <FormatTools bridge={bridge} />
      <div className="w-px h-6 bg-border" />
      <FontSelector bridge={bridge} />
      <CharacterFormatting bridge={bridge} />
      <div className="w-px h-6 bg-border" />
      <StyleSelector bridge={bridge} />
      <ParagraphFormatting bridge={bridge} />
      <ListTools bridge={bridge} />
    </div>
  )
}
