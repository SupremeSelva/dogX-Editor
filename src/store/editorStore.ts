import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface EditorStore {
  isReady: boolean;
  wordCount: number;
  pageCount: number;
  currentPage: number;
  zoom: number;
  canUndo: boolean;
  canRedo: boolean;
  
  selection: {
    isBold: boolean;
    isItalic: boolean;
    isUnderline: boolean;
    isStrikeout: boolean;
    fontSize: number;
    fontFamily: string;
    color: string;
    highlight: string | null;
  };
  
  setReady: (ready: boolean) => void;
  setWordCount: (count: number) => void;
  setPageCount: (count: number) => void;
  setCurrentPage: (page: number) => void;
  setZoom: (zoom: number) => void;
  setCanUndo: (can: boolean) => void;
  setCanRedo: (can: boolean) => void;
  setSelection: (selection: Partial<EditorStore['selection']>) => void;
}

export const useEditorStore = create<EditorStore>()(
  immer((set) => ({
    isReady: false,
    wordCount: 0,
    pageCount: 1,
    currentPage: 1,
    zoom: 100,
    canUndo: false,
    canRedo: false,
    
    selection: {
      isBold: false,
      isItalic: false,
      isUnderline: false,
      isStrikeout: false,
      fontSize: 16,
      fontFamily: 'Arial',
      color: '#000000',
      highlight: null,
    },
    
    setReady: (ready) => set({ isReady: ready }),
    setWordCount: (count) => set({ wordCount: count }),
    setPageCount: (count) => set({ pageCount: count }),
    setCurrentPage: (page) => set({ currentPage: page }),
    setZoom: (zoom) => set({ zoom }),
    setCanUndo: (can) => set({ canUndo: can }),
    setCanRedo: (can) => set({ canRedo: can }),
    setSelection: (selection) => set((state) => {
      Object.assign(state.selection, selection)
    }),
  }))
)
