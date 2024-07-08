export interface VenueSections {
  id: number;
  name: string;
  type: string;
  collapse: number;
  sections: Section[];
}

export interface Section {
  id: number;
  name: string;
  description: string | null;
  position: number;
  visible: number;
  images: Image[];
  items: Item[];
}

interface Image {
  id: number;
  image: string;
}

interface Item {
  id: number;
  name: string;
  description: string | null;
  alcoholic: number;
  price: number;
  position: number;
  visible: number;
  availabilityType: string;
  sku: string;
  modifiers?: Modifier[];
  images?: Image[];
  available: boolean;
}

interface Modifier {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: ModifierItem[];
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
