import { configureStore } from '@reduxjs/toolkit';
import webSettingsReducer from '../features/webSettings/webSettingsSlice';
import SectionsReducer from '../features/sections/sectionsSlice'
import cartItemsReducer from '../features/cart/cartItemsSlice'
import cartTotalsReducer from '../features/cart/cartTotalsSlice'

const store = configureStore({
  reducer: {
    webSettings: webSettingsReducer,
    sections: SectionsReducer,
    cartItems: cartItemsReducer,
    cartTotals: cartTotalsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
