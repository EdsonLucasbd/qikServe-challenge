import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Image {
  id: number;
  image: string;
}

interface ModifierItem {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  position: number;
  visible: number;
  availabilityType: string;
  qty?: number;
  available: boolean;
}

interface Modifier {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: ModifierItem[];
}

interface Item {
  id: number;
  name: string;
  description: string;
  alcoholic: number;
  price: number;
  position: number;
  visible: number;
  availabilityType: string;
  sku: string;
  modifiers?: Modifier[];
  images: Image[];
  available: boolean;
}

interface Section {
  id: number;
  name: string;
  description?: string;
  position: number;
  visible: number;
  images: Image[];
  items: Item[];
}

interface SectionsState {
  sections: Section[];
  selectedSectionId: number | null;
}

const initialState: SectionsState = {
  sections: [],
  selectedSectionId: null,
};

const sectionsSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    setSections(state, action: PayloadAction<Section[]>) {
      state.sections = action.payload;
    },
    selectSection(state, action: PayloadAction<number>) {
      state.selectedSectionId = action.payload;
    },
    clearSelection(state) {
      state.selectedSectionId = null;
    },
  },
});

export const { setSections, selectSection, clearSelection } = sectionsSlice.actions;
export default sectionsSlice.reducer;

export type { SectionsState, Section, Item, Modifier, ModifierItem, Image };
