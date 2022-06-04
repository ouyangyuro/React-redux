import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const customerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.value.push(action.payload);
    },
    addFood: (state, action) => {
      state.value.forEach((customer) => {
        if (customer.name === action.payload.name) {
          customer.food.push(action.payload.food);
        }
      });
    },
  },
});

export const { addCustomer, addFood } = customerSlice.actions;

export default customerSlice.reducer;
