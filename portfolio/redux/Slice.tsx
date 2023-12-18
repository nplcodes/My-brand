// redux/slices/selectedComponentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const selectedComponentSlice = createSlice({
  name: 'selectedComponent',
  initialState:{
    selected: 'Messages'
  },
  reducers: {
    setSelectedComponent: (state, action) => {
        state.selected = action.payload
    },
  },
});

export const { setSelectedComponent } = selectedComponentSlice.actions;
export default selectedComponentSlice.reducer;
