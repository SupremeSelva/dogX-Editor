import React, { useRef } from 'react'
import { Button } from '@/shared/components/ui'
import { EditorBridge } from '@/core/bridge'
import { Image } from 'lucide-react'

interface MediaInsertProps {
  bridge: EditorBridge;
}

export const MediaInsert: React.FC<MediaInsertProps> = ({ bridge }) => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      const base64 = event.target?.result as string
      bridge.executeCommand('insertImage', { value: base64, width: 300, height: 200 })
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="flex items-center gap-1">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
      <Button
        variant="toolbar"
        size="sm"
        onClick={() => fileInputRef.current?.click()}
        title="Insert Image"
      >
        <Image className="h-4 w-4 mr-1" />
        Image
      </Button>
    </div>
  )
}
