import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WebSettings } from '../../types/venue';

const initialState: WebSettings = {
  id: 0,
  venueId: 0,
  bannerImage: '',
  backgroundColour: '',
  primaryColour: '',
  primaryColourHover: '',
  navBackgroundColour: '',
};

const webSettingsSlice = createSlice({
  name: 'webSettings',
  initialState,
  reducers: {
    setWebSettings(state, action: PayloadAction<WebSettings>) {
      state = action.payload;
      return action.payload;
    },
  },
});

export const { setWebSettings } = webSettingsSlice.actions;
export default webSettingsSlice.reducer;
