import { configureStore } from '@reduxjs/toolkit';
import webSettingsReducer from '../features/webSettings/webSettingsSlice';
import SectionsReducer from '../features/sections/sectionsSlice'

const store = configureStore({
  reducer: {
    webSettings: webSettingsReducer,
    sections: SectionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
