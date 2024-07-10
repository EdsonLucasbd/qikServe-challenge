import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartItemsState {
  items: CartItem[];
}

const initialState: CartItemsState = {
  items: [],
};

const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }

    },
    updateItemQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, updateItemQuantity, removeItem } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;

export type { CartItem, CartItemsState }