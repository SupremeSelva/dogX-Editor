import { useEffect, useRef, useState } from 'react'
import { EditorBridge } from '@/core/bridge'
import type { IEditorData, IEditorOption } from '@/core/engine/interface/Editor'

export interface UseEditorInstanceOptions {
  initialData: IEditorData;
  options?: IEditorOption;
}

export const useEditorInstance = ({ initialData, options }: UseEditorInstanceOptions) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const bridgeRef = useRef<EditorBridge | null>(null)
  const [isReady, setIsReady] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const bridge = new EditorBridge()
    bridgeRef.current = bridge

    bridge.on('editorReady', () => {
      setIsReady(true)
    })

    bridge.on('error', ({ error }) => {
      setError(error)
      console.error('Editor initialization error:', error)
    })

    bridge.init(containerRef.current, initialData, options).catch((err) => {
      setError(err)
    })

    return () => {
      bridge.destroy()
      bridgeRef.current = null
    }
  }, [])

  return {
    bridge: bridgeRef.current,
    containerRef,
    isReady,
    error,
  }
}
