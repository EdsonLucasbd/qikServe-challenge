import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  option: string;
  price: number;
  quantity: number;
}

interface CartItemsState {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}

const initialState: CartItemsState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

    },

    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);

      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    
    updateItemQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        if(quantity === 0) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity = quantity;
        }
      }

      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);

      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
});

export const { addItem, updateItemQuantity, removeItem } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;

export type { CartItem, CartItemsState }