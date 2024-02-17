import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCrypto: null,
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setSelectedCrypto(state, action) {
      state.selectedCrypto = action.payload;
    },
  },
});

export const { setSelectedCrypto } = cryptoSlice.actions;

export default cryptoSlice.reducer;
