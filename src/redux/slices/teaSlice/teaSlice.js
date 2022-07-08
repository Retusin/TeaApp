import {createSlice} from '@reduxjs/toolkit';

const teaSlice = createSlice({
  name: 'tea',
  initialState: {
    currentTea: null,
  },
  reducers: {
    setCurrentTea: (state, action) => {
      state.currentTea = action.payload;
    },
  },
});

export const {setCurrentTea} = teaSlice.actions;
export default teaSlice.reducer;
