import { create } from 'zustand'

interface UIStore {
  activeDialog: string | null;
  searchOpen: boolean;
  searchKeyword: string;
  replaceWith: string;
  matchCase: boolean;
  useRegex: boolean;
  
  setActiveDialog: (dialog: string | null) => void;
  setSearchOpen: (open: boolean) => void;
  setSearchKeyword: (keyword: string) => void;
  setReplaceWith: (text: string) => void;
  setMatchCase: (match: boolean) => void;
  setUseRegex: (use: boolean) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  activeDialog: null,
  searchOpen: false,
  searchKeyword: '',
  replaceWith: '',
  matchCase: false,
  useRegex: true,
  
  setActiveDialog: (dialog) => set({ activeDialog: dialog }),
  setSearchOpen: (open) => set({ searchOpen: open }),
  setSearchKeyword: (keyword) => set({ searchKeyword: keyword }),
  setReplaceWith: (text) => set({ replaceWith: text }),
  setMatchCase: (match) => set({ matchCase: match }),
  setUseRegex: (use) => set({ useRegex: use }),
}))
