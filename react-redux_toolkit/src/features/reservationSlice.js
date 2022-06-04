import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    addReservations: (state, action) => {
      state.value.push(action.payload);
    },
    removeReservations: (state, action) => {
      state.value.splice(action.payload, 1); //(index, Num element)
    },
  },
});

export const { addReservations, removeReservations } = reservationSlice.actions;

export default reservationSlice.reducer;
