
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { CartItem } from './cartItemsSlice';

interface CartTotalsState {
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartTotalsState = {
  totalQuantity: 0,
  totalPrice: 0,
};

const cartTotalsSlice = createSlice({
  name: 'cartTotals',
  initialState,
  reducers: {
    updateTotals: (state, action: PayloadAction<CartItem[]>) => {
      state.totalQuantity = action.payload.reduce((acc, item) => acc + item.quantity, 0);
      state.totalPrice = action.payload.reduce((acc, item) => acc + item.price * item.quantity, 0);
    },
  },
});

export const { updateTotals } = cartTotalsSlice.actions;

export const selectTotalQuantity = (state: RootState) => state.cartTotals.totalQuantity;
export const selectTotalPrice = (state: RootState) => state.cartTotals.totalPrice;

export default cartTotalsSlice.reducer;

export type { CartTotalsState };
